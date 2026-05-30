import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock3,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  MessageCircleQuestion,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";

export const metadata: Metadata = {
  title: "介護・デイサービスLP制作サンプル | 架空デモ",
  description:
    "デイサービス・訪問介護事業所を想定した、HP/LP制作サービスの架空デモです。",
};

const worries = [
  "どんな雰囲気の事業所か分からない",
  "利用できるサービス内容を知りたい",
  "見学や相談の流れが分かりにくい",
  "家族が安心して問い合わせられる情報が少ない",
];

const servicePoints = [
  "デイサービス",
  "訪問介護",
  "見学相談",
  "送迎・対応エリア",
  "1日の流れ",
  "ご家族向け案内",
  "採用・問い合わせ導線",
];

const services = [
  {
    title: "デイサービス案内",
    text: "1日の過ごし方、入浴、食事、レクリエーション、機能訓練などを家族目線で整理します。",
    icon: CalendarCheck,
  },
  {
    title: "訪問介護案内",
    text: "身体介護、生活援助、対応エリア、相談できる内容を分かりやすい単位で掲載できます。",
    icon: Home,
  },
  {
    title: "見学・相談導線",
    text: "電話、フォーム、LINEなど、次に何をすればよいか迷わない問い合わせ導線を作ります。",
    icon: Phone,
  },
  {
    title: "ご家族向け説明",
    text: "初めて介護サービスを探すご家族に向けて、利用開始までの流れや準備物を整理します。",
    icon: Users,
  },
  {
    title: "食事・活動紹介",
    text: "食事、行事、日中活動、施設の雰囲気を写真や短い文章で伝える枠を用意します。",
    icon: Utensils,
  },
  {
    title: "採用・スタッフ紹介",
    text: "小規模事業所でも、スタッフの雰囲気や働き方を伝える採用導線を追加できます。",
    icon: Sparkles,
  },
];

const flow = [
  {
    title: "お問い合わせ",
    text: "ご本人、ご家族、ケアマネジャーなど、誰が相談できるかを分かりやすく示します。",
  },
  {
    title: "見学・相談",
    text: "サービス内容、利用条件、空き状況、送迎範囲などを確認する流れを掲載します。",
  },
  {
    title: "担当者との調整",
    text: "ケアマネジャーや関係機関との確認事項を、初めての方にも伝わる形で整理します。",
  },
  {
    title: "利用開始",
    text: "契約から初回利用までの流れを見える化し、問い合わせ前の不安を減らします。",
  },
];

const faqs = [
  {
    question: "家族だけで相談しても大丈夫ですか？",
    answer:
      "実案件では、ご家族やケアマネジャーから相談できるか、見学前に確認したい内容を整理して掲載します。",
  },
  {
    question: "見学はできますか？",
    answer:
      "見学可能な曜日、予約方法、当日の流れなどを明記すると、ご家族が問い合わせしやすくなります。",
  },
  {
    question: "送迎エリアはどこまでですか？",
    answer:
      "対応エリアや送迎可能地域を分かりやすく掲載し、対象外の場合の相談方法も用意できます。",
  },
  {
    question: "利用前に準備するものはありますか？",
    answer:
      "介護保険証、担当ケアマネジャーの有無、現在の困りごとなど、相談前にあるとよい情報を整理します。",
  },
];

const heroImage =
  "https://images.unsplash.com/photo-1576765607924-8b8bbde47f5d?auto=format&fit=crop&w=1800&q=80";

export default function CareDemoPage() {
  return (
    <main className="overflow-hidden bg-[#f8fbf7] text-[#213223]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e9f6df] text-[#3f7f36]">
              <HeartHandshake size={22} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold sm:text-base">みらい介護サービス</span>
              <span className="block text-xs text-[#60705d]">介護・デイサービスLP制作サンプル / 架空デモ</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#4e604d] lg:flex">
            <a className="transition hover:text-[#3f7f36]" href="#about">
              伝えること
            </a>
            <a className="transition hover:text-[#3f7f36]" href="#service">
              サービス
            </a>
            <a className="transition hover:text-[#3f7f36]" href="#flow">
              利用の流れ
            </a>
            <a className="transition hover:text-[#3f7f36]" href="#contact">
              問い合わせ導線
            </a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-[#3f7f36] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-900/10 transition hover:-translate-y-0.5 hover:bg-[#346b2d] sm:inline-flex"
          >
            サンプル構成を見る
          </a>
          <a
            href="/"
            className="hidden rounded-full border border-[#b9dbae] bg-white px-5 py-2.5 text-sm font-bold text-[#346b2d] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f1faec] xl:inline-flex"
          >
            訪問看護版デモ
          </a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[84svh] items-center pt-20">
        <Image
          src={heroImage}
          alt="介護施設でスタッフと利用者が会話している様子"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/20" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f8fbf7] to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#cbe7bd] bg-white/85 px-4 py-2 text-sm font-bold text-[#3f7f36] shadow-sm backdrop-blur">
              <MapPin size={16} aria-hidden="true" />
              紀南エリア・三重南部エリアの事業所を想定した架空デモ
            </div>
            <p className="animate-fade-up mt-4 inline-block rounded-lg border border-amber-200 bg-amber-50/90 px-4 py-3 text-sm font-bold leading-7 text-amber-900 shadow-sm">
              ※このページはHP/LP制作サービスの架空デモです。実在の事業所ではありません。
            </p>
            <h1 className="animate-fade-up animate-delay-1 mt-8 text-4xl font-extrabold leading-[1.25] text-[#213223] sm:text-5xl lg:text-6xl">
              <span className="inline-block">介護サービスを、</span>
              <span className="inline-block">利用者さんとご家族に</span>
              <span className="inline-block">分かりやすく伝える</span>
              <span className="inline-block">1ページ。</span>
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-6 max-w-2xl text-lg leading-9 text-[#3f543d] sm:text-xl">
              サービス内容、見学相談、対応エリア、利用開始までの流れをスマホで見やすく整理した制作サンプルです。
            </p>
            <div className="animate-fade-up animate-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#3f7f36] px-7 py-3 text-center text-base font-bold text-white shadow-xl shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-[#346b2d]"
              >
                サンプル構成を見る
              </a>
              <a
                href="#service"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b9dbae] bg-white/85 px-7 py-3 text-center text-base font-bold text-[#346b2d] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                サービス内容を見る
              </a>
            </div>
            <div className="animate-fade-up animate-delay-3 mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["対象", "デイサービス・訪問介護"],
                ["目的", "見学・相談導線"],
                ["形式", "スマホ対応1ページ"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-bold text-[#687867]">{label}</p>
                  <p className="mt-1 text-sm font-bold text-[#213223]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="text-sm font-bold text-[#3f7f36]">介護サービスの案内ページで伝えること</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#213223] sm:text-4xl">
              初めて見るご家族にも、雰囲気と相談方法が伝わる構成にできます。
            </h2>
            <p className="mt-5 leading-8 text-[#536551]">
              デイサービスや訪問介護は、サービス内容だけでなく、事業所の雰囲気、見学のしやすさ、相談先の分かりやすさが問い合わせに影響します。このサンプルでは、利用者さんとご家族が迷わず次の行動を取れる構成を意識しています。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {servicePoints.map((point, index) => (
              <div
                key={point}
                className="animate-fade-up rounded-lg border border-[#dcead5] bg-white p-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/10"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <CheckCircle2 className="text-[#5a9f47]" size={22} aria-hidden="true" />
                <p className="mt-3 font-bold text-[#213223]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#3f7f36]">このようなお悩みはありませんか？</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#213223] sm:text-4xl">
              問い合わせ前の不安を、ページ内で先に整理します。
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {worries.map((worry) => (
              <div
                key={worry}
                className="group rounded-lg border border-[#dcead5] bg-[#f8fbf7] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#b7d9a9] hover:bg-white"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-[#e9f6df] text-[#3f7f36] transition group-hover:scale-105">
                  <MessageCircleQuestion size={22} aria-hidden="true" />
                </span>
                <p className="mt-5 text-lg font-bold leading-8 text-[#213223]">{worry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold text-[#3f7f36]">サービス内容</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#213223] sm:text-4xl">
                事業所の特徴を、家族が判断しやすい単位で整理します。
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#e9f6df] px-6 py-3 text-sm font-bold text-[#346b2d] transition hover:-translate-y-0.5 hover:bg-[#d9efcd] sm:w-auto"
            >
              問い合わせ導線を見る
            </a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-lg border border-[#dcead5] bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#eff8ea] text-[#3f7f36]">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-extrabold text-[#213223]">{service.title}</h3>
                  </div>
                  <p className="mt-4 leading-8 text-[#536551]">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#edf7e8] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold text-[#3f7f36]">対応エリア</p>
            <h2 className="mt-2 text-2xl font-extrabold leading-[1.4] text-[#213223] sm:text-3xl">
              実案件では、送迎範囲・訪問可能地域を分かりやすく掲載します。
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["紀南エリア", "三重南部エリア", "周辺地域"].map((area) => (
              <div key={area} className="rounded-lg border border-white bg-white/80 px-6 py-4 text-center font-bold text-[#346b2d] shadow-sm">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#3f7f36]">ご利用開始までの流れ</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#213223] sm:text-4xl">
              見学・相談から利用開始まで、初めての方にも分かりやすく案内します。
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {flow.map((item, index) => (
              <article key={item.title} className="relative rounded-lg border border-[#dcead5] bg-white p-6 shadow-sm">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#3f7f36] text-sm font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-[#213223]">{item.title}</h3>
                <p className="mt-3 leading-8 text-[#536551]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold text-[#3f7f36]">よくある質問</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#213223] sm:text-4xl">
              利用前に気になることをまとめました。
            </h2>
            <p className="mt-5 leading-8 text-[#536551]">
              制度や空き状況は事業所ごとに異なるため、実案件では確認が必要な情報を整理して掲載します。
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-[#dcead5] bg-[#f8fbf7] p-5 open:bg-white open:shadow-lg open:shadow-green-900/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#213223]">
                  <span>{faq.question}</span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[#3f7f36] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-8 text-[#536551]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#e4f2dd] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold text-[#3f7f36]">お問い合わせ</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#213223] sm:text-4xl">
              見学・相談につながる導線を、ページ下部にまとめます。
            </h2>
            <p className="mt-5 leading-8 text-[#536551]">
              電話、メール、フォームをまとめて掲載することで、ご家族やケアマネジャーが問い合わせしやすい状態にします。
            </p>
            <div className="mt-8 space-y-4">
              <a href="tel:0000000000" className="flex items-center gap-4 rounded-lg bg-white p-5 font-bold text-[#213223] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <Phone className="shrink-0 text-[#3f7f36]" size={24} aria-hidden="true" />
                <span>0000-00-0000</span>
              </a>
              <a href="mailto:demo@example.jp" className="flex items-center gap-4 rounded-lg bg-white p-5 font-bold text-[#213223] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <Mail className="shrink-0 text-[#3f7f36]" size={24} aria-hidden="true" />
                <span>demo@example.jp</span>
              </a>
            </div>
          </div>

          <form className="rounded-lg border border-white bg-white p-5 shadow-xl shadow-green-900/10 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-[#4e604d]">お名前</span>
                <input className="mt-2 h-12 w-full rounded-lg border border-[#d4e5cf] bg-[#f8fbf7] px-4 outline-none transition focus:border-[#3f7f36] focus:bg-white focus:ring-4 focus:ring-[#d7efca]" type="text" name="name" placeholder="山田 太郎" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-[#4e604d]">ご連絡先</span>
                <input className="mt-2 h-12 w-full rounded-lg border border-[#d4e5cf] bg-[#f8fbf7] px-4 outline-none transition focus:border-[#3f7f36] focus:bg-white focus:ring-4 focus:ring-[#d7efca]" type="text" name="contact" placeholder="電話番号またはメール" />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-[#4e604d]">相談内容</span>
              <select className="mt-2 h-12 w-full rounded-lg border border-[#d4e5cf] bg-[#f8fbf7] px-4 outline-none transition focus:border-[#3f7f36] focus:bg-white focus:ring-4 focus:ring-[#d7efca]" name="subject" defaultValue="">
                <option value="" disabled>
                  選択してください
                </option>
                <option>見学について知りたい</option>
                <option>サービス内容を知りたい</option>
                <option>家族から相談したい</option>
                <option>その他</option>
              </select>
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-[#4e604d]">メッセージ</span>
              <textarea className="mt-2 min-h-36 w-full rounded-lg border border-[#d4e5cf] bg-[#f8fbf7] px-4 py-3 outline-none transition focus:border-[#3f7f36] focus:bg-white focus:ring-4 focus:ring-[#d7efca]" name="message" placeholder="確認したい内容をご記入ください" />
            </label>
            <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#3f7f36] px-7 py-3 text-base font-bold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-[#346b2d]">
              送信する
            </button>
            <p className="mt-4 text-sm leading-7 text-[#687867]">
              ※このフォームは架空デモです。実運用時は送信先設定、個人情報保護方針、同意チェックを追加します。
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-[#213223] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-extrabold">みらい介護サービス</p>
            <p className="mt-2 text-sm text-white/70">介護・デイサービスLP制作サンプル / 架空デモ</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} aria-hidden="true" />
              制作サンプル
            </span>
            <span className="inline-flex items-center gap-2">
              <ClipboardList size={16} aria-hidden="true" />
              見学導線
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 size={16} aria-hidden="true" />
              スマホ対応
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
