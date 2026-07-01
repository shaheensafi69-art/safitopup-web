export class SmmService {
  static async placeOrder(userId: number, serviceId: number, link: string, quantity: number) {
    return {
      userId,
      serviceId,
      link,
      quantity,
      status: 'queued',
      message: 'Order placeholder created successfully.',
    };
  }
}
