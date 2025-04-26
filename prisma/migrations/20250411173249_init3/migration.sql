-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GameSettings" (
    "settings_Id" TEXT NOT NULL PRIMARY KEY,
    "game_path" TEXT NOT NULL,
    "patchVersion" TEXT
);
INSERT INTO "new_GameSettings" ("game_path", "patchVersion", "settings_Id") SELECT "game_path", "patchVersion", "settings_Id" FROM "GameSettings";
DROP TABLE "GameSettings";
ALTER TABLE "new_GameSettings" RENAME TO "GameSettings";
CREATE UNIQUE INDEX "GameSettings_settings_Id_key" ON "GameSettings"("settings_Id");
CREATE UNIQUE INDEX "GameSettings_game_path_key" ON "GameSettings"("game_path");
CREATE UNIQUE INDEX "GameSettings_patchVersion_key" ON "GameSettings"("patchVersion");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
