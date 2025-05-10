// import Image from "next/image";
import { Title } from "@/components/ui/title";
import { RecommendedCard } from "@/components/ui/recommendedCard";
import { FAQ } from "@/components/ui/faq";

export default function Home() {
  return (
    <div>
      <div className="bg-no-repeat md:h-[calc(100vh-80px)] h-[100vw] w-full bg-[url('/images/hero.png')] bg-cover bg-center">
        <p className="absolute sm:left-[5vw] left-[3vw] xl:top-[190] lg:top-[180] top-[calc(15vw+80px)] text-shadow-[4px_4px_4px_#FF84AA] xl:text-8xl lg:text-7xl md:text-6xl text-[7vw] font-bold text-white transform-[rotate(-15deg)]">
          ライバー
        </p>
        <p className="absolute sm:left-[10vw] left-[7vw] xl:top-[270] lg:top-[250] top-[calc(20vw+80px)] bg-clip-text text-transparent bg-[linear-gradient(95.16deg,_#FF84AA_5.81%,_#FC1FCC_97.87%)] xl:text-9xl lg:text-8xl md:text-7xl text-[11vw] font-bold transform-[rotate(-15deg)] filter drop-shadow-[6px_6px_2px_#FFFFFF]">
          募集！
        </p>
        <div
          className="bg-[url('/images/speech.png')] bg-cover bg-center absolute xl:right-[2vw] lg:right-[1vw] right-0 xl:top-[200] lg:top-[250] md:top-[300] top-[calc(30vw+80px)] bg-no-repeat flex justify-center items-center"
        >
          <p className="xl:py-10 xl:px-24 lg:py-8 lg:px-21 md:py-7 md:px-16 sm:py-5 sm:px-12 py-[2.5vw] px-[7vw]  xl:text-3xl lg:text-2xl sm:text-xl text-[3vw] font-bold text-center text-[#333333] text-shadow-[4px_4px_4px_rgba(0,0,0,0.4)] text-bold">
            やってみないと<br />
            わからない！
          </p>
        </div>
        <p className="absolute xl:top-[calc(92vh-80px)] lg:top-[calc(94vh-80px)] md:top-[calc(96vh-80px)] top-[100vw] right-[2vw] font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-[#FDF70B] text-shadow-[4px_4px_4px_#FF84AA]">
          あなたの隠れた才能を<br />
          開花させるのは今です！
        </p>
      </div>
      <div id="about" className="scroll-mt-[80px]">
        <Title text="ライバーとは" val="title1" />
        <div className="bg-[url(/images/liver_bg.jpg)] py-20 w-full bg-center bg-cover flex flex-col md:flex-row items-center justify-center">
          <img src="/images/liver.webp" alt="liver" className="xl:h-[300] sm:h-[200] h-[200] xl:ml-[-250] md:ml-[-150] mb-10 md:mb-0" />
          <p className="text-center xl:text-3xl sm:text-2xl text-xl text-[#543B2A] font-bold md:pl-[20] px-2 md:px-0">
            ライブ配信でお客様と画面越しに<br />
            楽しくお話しするお仕事です。 <br />
            ご希望のジャンルで配信いただけます。</p>
        </div>
      </div>
      <div id="compensation" className="bg-[#FFF2F2] scroll-mt-[80px]">
        <Title text="報酬について" val="title2" />
        <div className="flex items-center justify-center">
          <p className="text-[#543B2A] font-bold xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-sm text-center sm:py-20 py-15">
            完全歩合制です。売上の30%をお受け取りいただけます。<br />
            自分の頑張りに応じて時給が大きくなります。<br />
            時給換算で1万円から2万円稼がれる方もいらっしゃいます。
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-15 pb-20 px-10 ">
          <div className="max-w-[450] bg-white rounded-2xl sm:shadow-[10px_10px_0px_rgba(242,160,233,0.75)] shadow-[5px_5px_0px_rgba(242,160,233,0.75)]">
            <p className="text-center lg:text-2xl text-xl font-bold text-[#75BC31] pt-17">
              パーティーチャット
            </p>
            <p className="text-center lg:text-xl text-lg font-bold text-[#543B2A] pt-6">
              30円×10人×60分＝18,000円
            </p>
            <p className="text-center lg:text-xl text-lg font-bold text-[#75BC31] pt-1">
              ＼時間報酬18,000円／
            </p>
            <img src="/images/system01.png" alt="system01" className="sm:px-10 px-8 sm:py-15 py-10" />
            <p className="text-center lg:text-base text-sm font-bold text-[#543B2A] pt-1 pb-15">
              パーティーチャットは1人の女の子に対して、<br />
              複数のお客様が参加できるチャット形式。
            </p>
          </div>
          <div className="max-w-[450] bg-white rounded-2xl sm:shadow-[10px_10px_0px_rgba(242,160,233,0.75)] shadow-[5px_5px_0px_rgba(242,160,233,0.75)]">
            <p className="text-center lg:text-2xl text-xl font-bold text-[#E06597] pt-17">
              2ショットチャット
            </p>
            <p className="text-center lg:text-xl text-lg font-bold text-[#543B2A] pt-6">
              75円×1人×60分＝4,500円            </p>
            <p className="text-center lg:text-xl text-lg font-bold text-[#E06597] pt-1">
              ＼時間報酬4,500円／            </p>
            <img src="/images/system02.png" alt="system02" className="sm:px-10 px-8 sm:py-15 py-10" />
            <p className="text-center lg:text-base text-sm font-bold text-[#543B2A] pt-1 pb-15">
              2ショットチャットは1対1で<br />
              接客するチャット形式。
            </p>
          </div>
        </div>
      </div>
      <div id="recommended" className="bg-[#F7DFF9] scroll-mt-[80px]">
        <Title text="こんな人におすすめ" val="title1" />
        <div className="flex flex-col items-center justify-center sm:pb-20 pb-15">
          <img src="images/follow.png" alt="" className="sm:pt-15 pt-10 px-[10vw]" />
          <RecommendedCard
            title="接客経験のない方"
            description="お客様と直接会うことはなく顔出しも希望制ですので、接客のご経験がない方でも、安心して高収入を得られます。お客様との会話を楽しめる方には特に向いているお仕事です。"
          />
          <RecommendedCard
            title="ライブ配信に興味がある方"
            description="配信するための環境（部屋・機材等）は弊社が完全サポート！<br />
              毎日、部屋の清掃も行うため清潔な空間で配信を行うことが可能です。専属マネージャーが一人一人に適切なアドバイスを行うので、初めての方でも着実に進歩することができます。"
          />
          <RecommendedCard
            title="新しいことに挑戦してみたい方"
            description="弊社では出勤や売上に対するノルマは一切ございません。<br />
              働きたい時に稼ぎたい量を稼ぐという自由な働き方が保障されているので、何か新しいことにチャレンジしてみたいという方には特におすすめです。"
          />
        </div>
      </div>
      <div id="support" className="bg-[#FFF2F2] scroll-mt-[80px]">
        <Title text="ライバーを完全サポート" val="title2" />
        <div className="flex flex-col items-center justify-center">
          <img src="images/supports.png" alt="supports" className="md:w-[66%] w-[90%] max-w-[920px] mt-15" />
          <p className="text-center xl:text-3xl md:text-2xl sm:text-xl text-base font-bold text-[#543B2A] md:py-15 sm:py-10 py-5 md:w-[68%] w-[90%] max-w-[940px]">
            スマイルライブでは、初心者の方でも安心して配信を行えるように、
            専任のマネージャーが以下の項目を中心に全面サポートいたします。
          </p>
          <p className="xl:text-xl md:text-lg sm:text-base text-sm font-bold text-[#543B2A] w-[56%] max-w-[790px] sm:leading-10 leading-6 sm:mb-20 mb-15">
            1.的確なアドバイス<br />
            2.配信環境の用意<br />
            3.社会保険完備<br />
            4.即日手渡し日払い可能<br />
            5.送迎可能<br />
            6.24時間いつでも配信可能
          </p>
        </div>
      </div>
      <div id="contact" className="bg-[#F7DFF9] scroll-mt-[80px]">
        <Title text="お問い合わせ" val="title1" />
        <p className="text-center xl:text-2xl sm:text-xl font-bold text-[#543B2A] xl:py-20 py-15">
          公式ライン、またはお電話でお問い合わせください
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-5 gap-3 md:pb-15 pb-10 md:px-5 px-10">
          <a href="" className="follow_side_line">
            <img src="images/line_pc.png" alt="line_pc" className="w-[550]" />
          </a>
          <a href="tel:090-0000-0000" className="follow_side_tel">
            <img src="images/phone_pc.png" alt="phone_pc" className="w-[550]" />
          </a>
        </div>
      </div>
      <div id="faq" className="bg-[url(/images/faq_bg.png)] bg-cover bg-center scroll-mt-[80px]">
        <Title text="よくあるご質問" val="title2" />
        <div className="flex flex-col items-center justify-center md:pt-20 pt-10 md:py-50 py-30">
          <FAQ
            Q="身バレが怖いです。"
            A="お顔を隠しての配信が可能です。（マスク着用でも可能です。） また、配信するための部屋を弊社が用意いたしますので、ご自宅がバレる心配は一切ございません。容姿に自信がなくても、フィルター加工が加えられるのでご安心ください。"
          />
          <FAQ
            Q="適正年齢はありますか？"
            A="20代から30代の方が多いですが、40代の方でも高収入を得られている方はいらっしゃいます。<br />
                まずはお気軽にお問い合わせください。"
          />
          <FAQ
            Q="登録料や退会料はありますか？"
            A="登録や退会時に費用が発生することは一切ございません。<br />
                初期費用はゼロ円で始められます。"
          />
          <FAQ
            Q="ノルマはありますか？"
            A="出勤や売上に関するノルマはございません。ご自身が稼ぎたい時に稼ぎたいだけ配信をすることが可能です。"
          />
          <FAQ
            Q="在宅でもできますか？"
            A="はい。通勤と在宅の両方で配信可能です。"
          />
        </div>
      </div>
    </div >
  );
}