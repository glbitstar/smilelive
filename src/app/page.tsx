// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-no-repeat h-screen w-full "
        style={{ backgroundImage: "url('/images/top.png')", backgroundSize: '100% 100% ' }}>
      </div>
      {/* <div className="">
        <p className="absolute left-[5vw] top-[250] text-shadow-[4px_4px_4px_#FF84AA] text-7xl font-bold text-white transform-[rotate(-15deg)]">
          未経験者
        </p>
        <p className="absolute left-[10vw] top-[310] bg-clip-text text-transparent bg-[linear-gradient(95.16deg,_#FF84AA_5.81%,_#FC1FCC_97.87%)] text-9xl font-bold transform-[rotate(-15deg)] filter drop-shadow-[6px_6px_2px_#FFFFFF]">
          歓迎！
        </p>
        <div
          style={{ backgroundImage: "url('/images/speech.png')" }}
          className="absolute right-[2vw] top-[22vw] bg-no-repeat w-[421] h-[161] flex justify-center items-center"
        >
          <p className="text-3xl text-center text-[#333333] text-shadow-[4px_4px_4px_rgba(0,0,0,0.4)] text-bold">
            やってみないと<br />
            わからない！
          </p>
        </div>
        <p className="absolute top-[85vh] right-[2vw] font-bold text-5xl text-[#FDF70B] text-shadow-[4px_4px_4px_#FF84AA]">
          あなたの隠れた才能を<br />
          開花させるのは今です！
        </p>
      </div> */}
      <div className="">
        <div className="h-20 bg-[linear-gradient(180deg,#F2A0E9_0%,#CE54C1_100%)] flex justify-center items-center ">
          <p className="text-3xl font-bold text-shadow-[4px_4px_4px_#F59DA5]">
            <img src="/images/wand-stars-outline-left.png" alt="Image 1" className="inline-block align-middle mr-[10] w-[50]" />
            ライバーとは
            <img src="/images/wand-stars-outline-right.png" alt="Image 2" className="inline-block align-middle ml-[10] w-[50]" />
          </p>
        </div>
        <div className="bg-[url(/images/liver_bg.jpg)] h-[420] w-full bg-center bg-cover flex items-center justify-center">
          <img src="/images/liver.webp" alt="liver" className="h-[300] ml-[-250]" />
          <p className="text-center text-3xl text-[#543B2A] font-bold pl-[20]">
            ライブ配信でお客様と画面越しに<br />
            楽しくお話しするお仕事です。 <br />
            ご希望のジャンルで配信いただけます。</p>
        </div>
      </div>
      <div className="bg-[#FFF2F2]">
        <div className="h-20 bg-[linear-gradient(180deg,#FBCFD3_0%,#F59DA5_100%)] flex justify-center items-center ">
          <p className="text-3xl font-bold text-shadow-[4px_4px_4px_#FF84AA]">
            <img src="/images/wand-stars-outline-left.png" alt="Image 1" className="inline-block align-middle mr-[10] w-[50]" />
            報酬について
            <img src="/images/wand-stars-outline-right.png" alt="Image 2" className="inline-block align-middle ml-[10] w-[50]" />
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-[#543B2A] font-bold text-3xl text-center py-20">
            完全歩合制です。売上の30%をお受け取りいただけます。<br />
            自分の頑張りに応じて時給が大きくなります。<br />
            時給換算で1万円から2万円稼がれる方もいらっしゃいます。
          </p>
        </div>
        <div className="flex items-center justify-center gap-15 pb-20">
          <div className="h-[570] w-[450] bg-white rounded-2xl shadow-[10px_10px_0px_rgba(242,160,233,0.75)]">
            <p className="text-center text-2xl font-bold text-[#75BC31] pt-17">
              パーティーチャット
            </p>
            <p className="text-center text-xl font-bold text-[#543B2A] pt-6">
              30円×10人×60分＝18,000円
            </p>
            <p className="text-center text-xl font-bold text-[#75BC31] pt-1">
              ＼時間報酬18,000円／
            </p>
            <img src="/images/system01.png" alt="system01" className="px-10 pt-15 pb-15" />
            <p className="text-center text-base font-bold text-[#543B2A] pt-1">
              パーティーチャットは1人の女の子に対して、<br />
              複数のお客様が参加できるチャット形式。
            </p>
          </div>
          <div className="h-[570] w-[450] bg-white rounded-2xl shadow-[10px_10px_0px_rgba(242,160,233,0.75)]">
            <p className="text-center text-2xl font-bold text-[#E06597] pt-17">
              2ショットチャット
            </p>
            <p className="text-center text-xl font-bold text-[#543B2A] pt-6">
              75円×1人×60分＝4,500円            </p>
            <p className="text-center text-xl font-bold text-[#E06597] pt-1">
              ＼時間報酬4,500円／            </p>
            <img src="/images/system02.png" alt="system02" className="px-10 pt-15 pb-15" />
            <p className="text-center text-base font-bold text-[#543B2A] pt-1">
              2ショットチャットは1対1で<br />
              接客するチャット形式。
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F7DFF9]">
        <div className="h-20 bg-[linear-gradient(180deg,#F2A0E9_0%,#CE54C1_100%)] flex justify-center items-center ">
          <p className="text-3xl font-bold text-shadow-[4px_4px_4px_#F59DA5]">
            <img src="/images/wand-stars-outline-left.png" alt="Image 1" className="inline-block align-middle mr-[10] w-[50]" />
            こんな人におすすめ
            <img src="/images/wand-stars-outline-right.png" alt="Image 2" className="inline-block align-middle ml-[10] w-[50]" />
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="images/follow.png" alt="" className="pt-15" />
          <div className="bg-white rounded-2xl border-2 border-[#F2A0E9] mt-8 w-[70vw] max-w-[1000px]">
            <p className="text-center text-3xl font-bold text-[#F2A0E9] pt-8 pb-5 mx-[10%] border-b-2">
              接客経験のない方
            </p>
            <p className="text-center text-xl font-bold text-[#543B2A] pt-10 pb-10 px-[5%]">
              お客様と直接会うことはなく顔出しも希望制ですので、接客のご経験がない方でも、安心して高収入を得られます。お客様との会話を楽しめる方には特に向いているお仕事です。
            </p>
          </div>
          <div className="bg-white rounded-2xl border-2 border-[#F2A0E9] mt-8 w-[70vw] max-w-[1000px]">
            <p className="text-center text-3xl font-bold text-[#F2A0E9] pt-8 pb-5 mx-[10%] border-b-2">
              ライブ配信に興味がある方
            </p>
            <p className="text-center text-xl font-bold text-[#543B2A] pt-10 pb-10 px-[5%]">
              配信するための環境（部屋・機材等）は弊社が完全サポート！<br />
              毎日、部屋の清掃も行うため清潔な空間で配信を行うことが可能です。専属マネージャーが一人一人に適切なアドバイスを行うので、初めての方でも着実に進歩することができます。
            </p>
          </div>
          <div className="bg-white rounded-2xl border-2 border-[#F2A0E9] mt-8 w-[70vw] max-w-[1000px] mb-20">
            <p className="text-center text-3xl font-bold text-[#F2A0E9] pt-8 pb-5 mx-[10%] border-b-2">
              新しいことに挑戦してみたい方
            </p>
            <p className="text-center text-xl font-bold text-[#543B2A] pt-10 pb-10 px-[5%]">
              弊社では出勤や売上に対するノルマは一切ございません。<br />
              働きたい時に稼ぎたい量を稼ぐという自由な働き方が保障されているので、何か新しいことにチャレンジしてみたいという方には特におすすめです。
            </p>
          </div>

        </div>
      </div>
      <div className="bg-[#FFF2F2]">
        <div className="h-20 bg-[linear-gradient(180deg,#FBCFD3_0%,#F59DA5_100%)] flex justify-center items-center ">
          <p className="text-3xl font-bold text-shadow-[4px_4px_4px_#FF84AA]">
            <img src="/images/wand-stars-outline-left.png" alt="Image 1" className="inline-block align-middle mr-[10] w-[50]" />
            ライバーを完全サポート
            <img src="/images/wand-stars-outline-right.png" alt="Image 2" className="inline-block align-middle ml-[10] w-[50]" />
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="images/supports.png" alt="supports" className="w-[66%] max-w-[920px] mt-15" />
          <p className="text-center text-3xl font-bold text-[#543B2A] py-15 w-[68%] max-w-[940px]">
            スマイルライブでは、初心者の方でも安心して配信を行えるように、
            専任のマネージャーが以下の項目を中心に全面サポートいたします。
          </p>
          <p className=" text-xl font-bold text-[#543B2A] w-[56%] max-w-[790px] leading-10 mb-20">
            1.的確なアドバイス<br />
            2.配信環境の用意<br />
            3.社会保険完備<br />
            4.即日手渡し日払い可能<br />
            5.送迎可能<br />
            6.24時間いつでも配信可能
          </p>
        </div>
      </div>
      <div className="bg-[#F7DFF9]">
        <div className="h-20 bg-[linear-gradient(180deg,#F2A0E9_0%,#CE54C1_100%)] flex justify-center items-center ">
          <p className="text-3xl font-bold text-shadow-[4px_4px_4px_#F59DA5]">
            <img src="/images/wand-stars-outline-left.png" alt="Image 1" className="inline-block align-middle mr-[10] w-[50]" />
            お問い合わせ
            <img src="/images/wand-stars-outline-right.png" alt="Image 2" className="inline-block align-middle ml-[10] w-[50]" />
          </p>
        </div>
        <p className="text-center text-2xl font-bold text-[#543B2A] py-20">
          公式ライン、またはお電話でお問い合わせください
        </p>
        <div className="flex items-center justify-center gap-5 pb-15">
          <a href="https://lin.ee/NfkGrVi" className="follow_side_line">
            <img src="images/line_pc.png" alt="line_pc" className="w-[550]" />
          </a>
          <a href="tel:0120-998-707" className="follow_side_tel">
            <img src="images/phone_pc.png" alt="phone_pc" className="w-[550]" />
          </a>
        </div>
      </div>
      <div className="bg-[#FFF2F2]">
        <div className="h-20 bg-[linear-gradient(180deg,#FBCFD3_0%,#F59DA5_100%)] flex justify-center items-center ">
          <p className="text-3xl font-bold text-shadow-[4px_4px_4px_#FF84AA]">
            <img src="/images/wand-stars-outline-left.png" alt="Image 1" className="inline-block align-middle mr-[10] w-[50]" />
            よくあるご質問
            <img src="/images/wand-stars-outline-right.png" alt="Image 2" className="inline-block align-middle ml-[10] w-[50]" />
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-white shadow-[0px_5px_20px_rgba(0,0,0,0.35)] rounded-2xl border-2 border-[#E06597] mt-8 w-[70vw] max-w-[1000px]">
            <div className="font-bold text-[#E06597] pt-8 pb-3 mx-[4%] border-b-2 text-2xl flex items-center gap-4">
              <p className="text-4xl">Q.</p>
              <p>
                身バレが怖いです。
              </p>
            </div>
            <div className="font-bold text-[#543B2A] py-8 px-[4%] text-xl flex gap-4">
              <p className="text-4xl">A.</p>
              <p>
                お顔を隠しての配信が可能です。（マスク着用でも可能です。） また、配信するための部屋を弊社が用意いたしますので、ご自宅がバレる心配は一切ございません。容姿に自信がなくても、フィルター加工が加えられるのでご安心ください。
              </p>
            </div>
          </div>
          <div className="bg-white shadow-[0px_5px_20px_rgba(0,0,0,0.35)] rounded-2xl border-2 border-[#E06597] mt-8 w-[70vw] max-w-[1000px]">
            <div className="font-bold text-[#E06597] pt-8 pb-3 mx-[4%] border-b-2 text-2xl flex items-center gap-4">
              <p className="text-4xl">Q.</p>
              <p>
                適正年齢はありますか？
              </p>
            </div>
            <div className="font-bold text-[#543B2A] py-8 px-[4%] text-xl flex gap-4">
              <p className="text-4xl">A.</p>
              <p>
                20代から30代の方が多いですが、40代の方でも高収入を得られている方はいらっしゃいます。<br />
                まずはお気軽にお問い合わせください。
              </p>
            </div>
          </div>
          <div className="bg-white shadow-[0px_5px_20px_rgba(0,0,0,0.35)] rounded-2xl border-2 border-[#E06597] mt-8 w-[70vw] max-w-[1000px]">
            <div className="font-bold text-[#E06597] pt-8 pb-3 mx-[4%] border-b-2 text-2xl flex items-center gap-4">
              <p className="text-4xl">Q.</p>
              <p>
                登録料や退会料はありますか？
              </p>
            </div>
            <div className="font-bold text-[#543B2A] py-8 px-[4%] text-xl flex gap-4">
              <p className="text-4xl">A.</p>
              <p>
                登録や退会時に費用が発生することは一切ございません。<br />
                初期費用はゼロ円で始められます。
              </p>
            </div>
          </div>
          <div className="bg-white shadow-[0px_5px_20px_rgba(0,0,0,0.35)] rounded-2xl border-2 border-[#E06597] mt-8 w-[70vw] max-w-[1000px]">
            <div className="font-bold text-[#E06597] pt-8 pb-3 mx-[4%] border-b-2 text-2xl flex items-center gap-4">
              <p className="text-4xl">Q.</p>
              <p>
                ノルマはありますか？
              </p>
            </div>
            <div className="font-bold text-[#543B2A] py-8 px-[4%] text-xl flex gap-4">
              <p className="text-4xl">A.</p>
              <p>
                出勤や売上に関するノルマはございません。ご自身が稼ぎたい時に稼ぎたいだけ配信をすることが可能です。              </p>
            </div>
          </div>
          <div className="bg-white shadow-[0px_5px_20px_rgba(0,0,0,0.35)] rounded-2xl border-2 border-[#E06597] mt-8 w-[70vw] max-w-[1000px]">
            <div className="font-bold text-[#E06597] pt-8 pb-3 mx-[4%] border-b-2 text-2xl flex items-center gap-4">
              <p className="text-4xl">Q.</p>
              <p>
                在宅でもできますか？
              </p>
            </div>
            <div className="font-bold text-[#543B2A] py-8 px-[4%] text-xl flex gap-4">
              <p className="text-4xl">A.</p>
              <p>
                はい。通勤と在宅の両方で配信可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}