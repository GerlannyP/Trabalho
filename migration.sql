-- CreateTable
CREATE TABLE "UrsoPolar" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "tamanho" BOOLEAN NOT NULL,

    CONSTRAINT "UrsoPolar_pkey" PRIMARY KEY ("id")
);
