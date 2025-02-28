export default function handler(request, result) {
  if (request.method === 'GET') {
    const currentTime = new Date();
    return result.status(200).json(currentTime);
  }

  return result.status(200);
}