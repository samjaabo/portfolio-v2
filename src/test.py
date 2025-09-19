import math

cords = [
    [1720,560,1326,357],
    [4406,657,3967,854],
    [490,1967,253,1834],
    [7489,2061,7128,1851],
    [5427,1168,6093,1493],
    [3443,1664,3053,1461],
    [1900,2508,2635,2799],
    [3557,490,3304,635]
]

def xy_to_yaw_pitch(x, y, W, H):
    nx = x / W
    ny = y / H
    yaw = nx * 2 * math.pi - math.pi
    pitch = math.pi/2 - ny * math.pi
    pitch = max(min(pitch, math.pi/2 - 0.01), -math.pi/2 + 0.01)
    return yaw, pitch

W, H = 8192, 4096

for cord in cords:
    # compute center of the rectangle
    cx = (cord[0] + cord[2]) / 2
    cy = (cord[1] + cord[3]) / 2
    yaw, pitch = xy_to_yaw_pitch(cx, cy, W, H)
    print(f"{{ yaw: {yaw}, pitch: {pitch}, pause: 2000 }},")
