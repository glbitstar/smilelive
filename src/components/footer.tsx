// import React from 'react';
// import Link from 'next/link';
// import { Logo } from './logo';
// import { MapPin, Clock, CalendarX } from 'lucide-react';

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-slate-50 border-t">
//       <div className="container py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="space-y-4">
//             <Logo />
//             <p className="text-sm text-slate-600 max-w-xs">
//               チラシとパンフレットのデザイン専門サービス。お客様のビジネスを成功に導くデザインをお届けします。
//             </p>
//             <div className="pt-2">
//               <p className="flex items-start text-sm text-slate-600 mb-1">
//                 <MapPin className="h-4 w-4 text-primary mr-2 shrink-0 mt-0.5" />
//                 <span>
//                   〒152-0002<br />
//                   東京都目黒区目黒本町1-16-3-304
//                 </span>
//               </p>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4">コンテンツ</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/" className="text-sm text-slate-600 hover:text-primary">
//                   ホーム
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="text-sm text-slate-600 hover:text-primary">
//                   サービス
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/works" className="text-sm text-slate-600 hover:text-primary">
//                   制作実績
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/prices" className="text-sm text-slate-600 hover:text-primary">
//                   料金案内
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/flow" className="text-sm text-slate-600 hover:text-primary">
//                   制作の流れ
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/privacy" className="text-sm text-slate-600 hover:text-primary">
//                   プライバシーポリシー
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/terms" className="text-sm text-slate-600 hover:text-primary">
//                   利用規約
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4">お問い合わせ</h3>
//             <Link
//               href="/contact"
//               className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
//             >
//               お問い合わせはこちら
//               <span className="ml-2 text-xs bg-yellow-400 text-primary px-2 py-0.5 rounded-full">初回特典</span>
//             </Link>
//             <div className="mt-4">
//               <p className="flex items-center text-sm text-slate-600 mb-1">
//                 <Clock className="h-4 w-4 text-primary mr-2" />
//                 営業時間: 平日 9:00〜18:00
//               </p>
//               <p className="flex items-center text-sm text-slate-600">
//                 <CalendarX className="h-4 w-4 text-primary mr-2" />
//                 休業日: 土日祝
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="border-t">
//         <div className="container py-6">
//           <p className="text-center text-sm text-slate-600">
//             © {currentYear} フライアトリエ All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
