import { Zap } from "lucide-react";
import Link from "next/link";

export default function UpgradeButton() {
  const CHEKOUT_URL =
    "https://codecraft-editor.lemonsqueezy.com/buy/a974349c-ea76-450a-ac0c-1acca7dcdbff";

  return (
    <Link
      href={CHEKOUT_URL}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        hover:from-blue-600 hover:to-blue-700 transition-all"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  );
}
// https://codecraft-editor.lemonsqueezy.com/buy/308d2223-b3f7-4452-a74a-47256f66b8fe
