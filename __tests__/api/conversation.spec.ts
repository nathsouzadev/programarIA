/**
 * @jest-environment node
 */
import { POST } from '@/src/app/api/conversation/route';

jest.mock('@google/generative-ai', () => ({
  GoogleGenerativeAI: jest.fn().mockImplementation(() => ({
    getGenerativeModel: jest.fn().mockImplementation(() => ({
      generateContent: jest.fn().mockResolvedValue({
        response: { text: () => 'Response from Gemini' },
      }),
    })),
  })),
}));

describe('/conversation', () => {
  it('should return string from api', async () => {
    const req = {
      json: jest.fn().mockResolvedValue({ message: 'hello' }),
    };
    const response = await POST(req as any);
    const data = await response.json();
    expect(data).toMatchObject({ message: 'Response from Gemini' });
  });

  it('should return 400 status if message is not provided', async () => {
    const req = {
      json: jest.fn().mockResolvedValue({}),
    };
    const response = await POST(req as any);
    expect(response.status).toEqual(400);
  });
});
