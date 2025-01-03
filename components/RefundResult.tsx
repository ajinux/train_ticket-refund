interface RefundResultProps {
  result: {
    refundAmount: number;
    cancellationCharge: number;
  };
}

export function RefundResult({ result }: RefundResultProps) {
  return (
    <div className="mt-6 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-600 dark:text-green-400">Refund Amount</p>
            <p className="text-2xl font-bold text-green-700 dark:text-green-300">
            ₹{(result.refundAmount-20 < 0 ? 0 : (result.refundAmount-20)).toFixed(2)}
            </p>
        </div>
        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p className="text-sm text-red-600 dark:text-red-400">Cancellation Charges</p>
            <p className="text-2xl font-bold text-red-700 dark:text-red-300">
            ₹{(result.refundAmount < 20 ? result.cancellationCharge : result.cancellationCharge+20).toFixed(2)}
            </p>
        </div>
      </div>
    </div>
  );
}
