/**
 * @jest-environment node
 */
import { POST } from '@/src/app/api/ada/route';

jest.mock('@google/generative-ai', () => ({
  GoogleGenerativeAI: jest.fn().mockImplementation(() => ({
    getGenerativeModel: jest.fn().mockImplementation(() => ({
      generateContent: jest.fn().mockResolvedValue({
        response: { text: () => 'Sou Ada Lovelace' },
      }),
    })),
  })),
}));

describe('/ada', () => {
  it('should return string from api', async () => {
    const req = {
      json: jest.fn().mockResolvedValue({ message: 'hello' }),
    };
    const response = await POST(req as any);
    const data = await response.json();
    expect(data).toMatchObject({ message: 'Sou Ada Lovelace' });
  });

  it('should return 400 status if message is not provided', async () => {
    const req = {
      json: jest.fn().mockResolvedValue({}),
    };
    const response = await POST(req as any);
    expect(response.status).toEqual(400);
  });
});
