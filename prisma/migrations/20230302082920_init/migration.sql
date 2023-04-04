-- CreateTable
CREATE TABLE "user_game" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_game_biodata" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hp" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "user_game_biodata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_game_history" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "user_game_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_game_username_key" ON "user_game"("username");
