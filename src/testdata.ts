import { prisma } from './prisma.service';

export async function cleanup() {
    await prisma.answer.deleteMany();
    await prisma.card.deleteMany();
    await prisma.user.deleteMany();
}

export async function createTestData() {
    await prisma.user.create({ data: { id: 1, name: 'user1' } });
    await prisma.user.create({ data: { id: 2, name: 'user2' } });
    await prisma.card.create({ data: { id: 1, question: 'question1' } });
    await prisma.card.create({ data: { id: 2, question: 'question2' } });
    await prisma.card.create({ data: { id: 3, question: 'question3' } });
    await prisma.card.create({ data: { id: 4, question: 'question4' } });
    await prisma.card.create({ data: { id: 5, question: 'question5' } });
    await prisma.answer.create({ data: { userId: 1, cardId: 1, answer: 'answer 1 of user 1' } });
    await prisma.answer.create({ data: { userId: 1, cardId: 3, answer: 'answer 3 of user 1' } });
    await prisma.answer.create({ data: { userId: 1, cardId: 5, answer: 'answer 5 of user 1' } });
    await prisma.answer.create({ data: { userId: 2, cardId: 3, answer: 'answer 3 of user 2' } });
    await prisma.answer.create({ data: { userId: 2, cardId: 4, answer: 'answer 4 of user 2' } });
}
