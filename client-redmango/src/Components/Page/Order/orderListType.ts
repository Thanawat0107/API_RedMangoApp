import { orderHeaderModel } from "../../../models";

export default interface OrderListProps {
  isLoading: boolean;
  orderData: orderHeaderModel[];
}