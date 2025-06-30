/*
  Warnings:

  - Added the required column `hasChromas` to the `Skin` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Chromas" (
    "skin_id" TEXT NOT NULL,
    "champ_id" TEXT NOT NULL,
    "chroma_id" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Skin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "skin_name" TEXT NOT NULL,
    "champ_id" INTEGER NOT NULL,
    "hasChromas" BOOLEAN NOT NULL,
    "skin_number" INTEGER NOT NULL,
    "local_skin_path" TEXT,
    CONSTRAINT "Skin_champ_id_fkey" FOREIGN KEY ("champ_id") REFERENCES "Champion" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);
INSERT INTO "new_Skin" ("champ_id", "id", "local_skin_path", "skin_name", "skin_number") SELECT "champ_id", "id", "local_skin_path", "skin_name", "skin_number" FROM "Skin";
DROP TABLE "Skin";
ALTER TABLE "new_Skin" RENAME TO "Skin";
CREATE UNIQUE INDEX "Skin_id_key" ON "Skin"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Chromas_champ_id_key" ON "Chromas"("champ_id");

-- CreateIndex
CREATE UNIQUE INDEX "Chromas_chroma_id_key" ON "Chromas"("chroma_id");
