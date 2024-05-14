/**
 * @jest-environment node
 */
import { POST } from '@/src/app/api/code/route';

jest.mock('@google/generative-ai', () => ({
  GoogleGenerativeAI: jest.fn().mockImplementation(() => ({
    getGenerativeModel: jest.fn().mockImplementation(() => ({
      generateContent: jest.fn().mockResolvedValue({
        response: { text: () => '<h1>Hello world from Gemini</h1>' },
      }),
    })),
  })),
}));

describe('/code', () => {
  it('should return string from api', async () => {
    const req = {
      json: jest.fn().mockResolvedValue({ message: 'hello' }),
    };
    const response = await POST(req as any);
    const data = await response.json();
    expect(data).toMatchObject({ message: '<h1>Hello world from Gemini</h1>' });
  });

  it('should return 400 status if message is not provided', async () => {
    const req = {
      json: jest.fn().mockResolvedValue({}),
    };
    const response = await POST(req as any);
    expect(response.status).toEqual(400);
  });
});
