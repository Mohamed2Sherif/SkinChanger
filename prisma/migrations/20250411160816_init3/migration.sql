-- CreateTable
CREATE TABLE "Champion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "champ_code" TEXT NOT NULL,
    "champ_name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Role" (
    "role_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "role_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Champion_Role" (
    "champId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    PRIMARY KEY ("champId", "roleId"),
    CONSTRAINT "Champion_Role_champId_fkey" FOREIGN KEY ("champId") REFERENCES "Champion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Champion_Role_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("role_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "skin_name" TEXT NOT NULL,
    "champ_id" INTEGER NOT NULL,
    "skin_number" INTEGER NOT NULL,
    "local_skin_path" TEXT,
    CONSTRAINT "Skin_champ_id_fkey" FOREIGN KEY ("champ_id") REFERENCES "Champion" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FavouriteSkin" (
    "skin_id" TEXT NOT NULL PRIMARY KEY,
    CONSTRAINT "FavouriteSkin_skin_id_fkey" FOREIGN KEY ("skin_id") REFERENCES "Skin" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GameSettings" (
    "settings_Id" TEXT NOT NULL PRIMARY KEY,
    "game_path" TEXT NOT NULL,
    "patchVersion" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Champion_id_key" ON "Champion"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Role_role_id_key" ON "Role"("role_id");

-- CreateIndex
CREATE UNIQUE INDEX "Skin_id_key" ON "Skin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FavouriteSkin_skin_id_key" ON "FavouriteSkin"("skin_id");

-- CreateIndex
CREATE UNIQUE INDEX "GameSettings_settings_Id_key" ON "GameSettings"("settings_Id");

-- CreateIndex
CREATE UNIQUE INDEX "GameSettings_game_path_key" ON "GameSettings"("game_path");

-- CreateIndex
CREATE UNIQUE INDEX "GameSettings_patchVersion_key" ON "GameSettings"("patchVersion");
