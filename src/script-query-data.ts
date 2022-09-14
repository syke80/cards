import { prisma } from './prisma.service';

/*
SELECT *
FROM cards
LEFT JOIN answers
ON cards.id = answers.cardId
AND answers.userId = 1
WHERE
answers.userId IS NOT NULL
ORDER BY cards.id DESC LIMIT 1
*/
function getFirstAnsweredCard(userId: number) {
  return prisma.card.findMany({
      where: {
          answers: {
              none: { userId }
          }
      }
  });
}


/*
SELECT cards.*
FROM cards
LEFT JOIN answers
ON cards.id = answers.cardId
AND answers.userId = 1
WHERE answers.userId IS NULL
*/
function getUnansweredCards(userId: number) {
    return prisma.card.findMany({
        where: {
            answers: {
                none: { userId }
            }
        }
    });
}

async function main() {
  const cards = await getUnansweredCards(2);
  console.log(cards);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })