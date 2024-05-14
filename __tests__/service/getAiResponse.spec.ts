/**
 * @jest-environment node
 */
import { getAiResponse } from '@/src/service/getAiResponse';
import nock from 'nock';

describe('getAiResponse', () => {
  it('should return string from api', async () => {
    nock(`${process.env.NEXT_PUBLIC_APP_URL}`)
      .post(`/api/conversation`)
      .reply(200, {
        message: 'Response from Gemini',
      });
    const message = 'hello';
    const url = '/api/conversation';

    const result = await getAiResponse(message, url);

    expect(result).toEqual('Response from Gemini');
  });
});
