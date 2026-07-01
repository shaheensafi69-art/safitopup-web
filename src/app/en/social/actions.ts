"use server";
import { SmmService } from '../../../services/smmservice'; 

export async function placeOrderAction(serviceId: number, link: string, quantity: number) {
  try {
    // Assuming userId is 1 for now
    const result = await SmmService.placeOrder(1, serviceId, link, quantity);
    return { success: true, data: result };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}