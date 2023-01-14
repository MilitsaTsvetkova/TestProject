/*
  Warnings:

  - You are about to drop the column `customerId` on the `Sale` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Sale` DROP FOREIGN KEY `Sale_customerId_fkey`;

-- AlterTable
ALTER TABLE `Sale` DROP COLUMN `customerId`;
