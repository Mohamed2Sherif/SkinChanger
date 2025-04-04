import os
from subprocess import run

game_path = "d:\Games\LeagueofLegends\League of Legends\Game"
run(["./mod-tools.exe", "--help"])
run(["./mod-tools.exe","import","D:\Games\leagueskinchanger\lol-skins\skins\Akshan\Crystal Rose Akshan.zip" ,"./Installed/Crystal Rose Akshan",f"--game:{game_path}","--noTFT"])
run(
    [
        "./mod-tools.exe",
        "mkoverlay",
        "./Installed",
        "./dst",
        f"--game:{game_path}",
        "--mods:Crystal Rose Akshan",
        "--noTFT",
    ]
)
run(["./mod-tools.exe", "runoverlay", "./dst", "./config.ini", f"--game:{game_path}"])
