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
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

const worries = [
  "外出が難しい",
  "服薬管理が不安",
  "生活リズムが整わない",
  "家族だけでは対応が難しい",
];

const targets = [
  "退院後の療養",
  "服薬管理",
  "体調確認",
  "リハビリ",
  "家族支援",
];

const services = [
  {
    title: "服薬支援",
    text: "飲み忘れや自己判断での中断を防ぎ、無理なく続けられる方法を一緒に整えます。",
    icon: Pill,
  },
  {
    title: "生活支援",
    text: "睡眠、食事、清潔、家事など、在宅生活を安定させるための小さな習慣づくりを支援します。",
    icon: Home,
  },
  {
    title: "症状観察",
    text: "気分、睡眠、活動量、対人面の変化を継続的に確認し、早めの相談につなげます。",
    icon: Stethoscope,
  },
  {
    title: "家族支援",
    text: "ご家族の不安や負担にも目を向け、関わり方や相談先を整理します。",
    icon: Users,
  },
  {
    title: "主治医との連携",
    text: "必要に応じて主治医や関係機関と情報共有し、支援方針をそろえます。",
    icon: ClipboardList,
  },
  {
    title: "社会復帰支援",
    text: "通院、就労、日中活動、福祉サービス利用など、次の一歩を現実的に支えます。",
    icon: Sparkles,
  },
];

const flow = [
  {
    title: "お問い合わせ",
    text: "ご本人、ご家族、相談支援員、医療機関からご相談いただけます。",
  },
  {
    title: "状況確認",
    text: "現在の困りごと、通院状況、生活環境、希望する支援内容を確認します。",
  },
  {
    title: "主治医へ相談",
    text: "訪問看護指示書の準備や、支援方針の確認を進めます。",
  },
  {
    title: "初回訪問",
    text: "看護師がご自宅へ伺い、支援計画と訪問頻度を一緒に決めます。",
  },
];

const faqs = [
  {
    question: "家族からの相談でも大丈夫ですか？",
    answer:
      "はい。ご本人が相談に迷っている段階でも、ご家族から状況を伺い、利用までの進め方を一緒に整理します。",
  },
  {
    question: "利用には主治医の指示が必要ですか？",
    answer:
      "訪問看護の開始には主治医の訪問看護指示書が必要です。手続きの流れはわかりやすくご案内します。",
  },
  {
    question: "どのくらいの頻度で訪問できますか？",
    answer:
      "状態や支援目的に応じて調整します。週1回から開始し、必要に応じて回数を相談する形を想定しています。",
  },
  {
    question: "退院後すぐでも相談できますか？",
    answer:
      "相談できます。退院後の療養、服薬管理、体調確認を含めて、ご自宅で安心して過ごせるよう支援します。",
  },
];

const staff = [
  {
    name: "管理者 / 訪問看護師",
    initial: "K",
    text: "病棟と地域支援の経験をもとに、退院後の療養を途切れず支えます。",
  },
  {
    name: "訪問看護師",
    initial: "S",
    text: "服薬、睡眠、生活リズムの相談を中心に、毎日の不安を一緒に整理します。",
  },
  {
    name: "相談連携担当",
    initial: "M",
    text: "医療機関、福祉サービス、ご家族との連携を担い、支援が孤立しない形を作ります。",
  },
];

const heroImage =
  "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1800&q=80";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f7fbfb] text-[#12323b]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#dff7ee] text-[#0f766e]">
              <HeartHandshake size={22} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold sm:text-base">
                みらい訪問看護ステーション
              </span>
              <span className="block text-xs text-[#51717a]">地域で暮らす方を支える訪問看護</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#365963] lg:flex">
            <a className="transition hover:text-[#0f766e]" href="#about">
              訪問看護とは
            </a>
            <a className="transition hover:text-[#0f766e]" href="#service">
              サービス
            </a>
            <a className="transition hover:text-[#0f766e]" href="#flow">
              利用の流れ
            </a>
            <a className="transition hover:text-[#0f766e]" href="#contact">
              お問い合わせ
            </a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-[#0f766e] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-[#0d635d] sm:inline-flex"
          >
            無料相談
          </a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[84svh] items-center pt-20">
        <Image
          src={heroImage}
          alt="自宅で訪問看護師と相談する利用者と家族"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/20" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f7fbfb] to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#b7e8dd] bg-white/80 px-4 py-2 text-sm font-bold text-[#0f766e] shadow-sm backdrop-blur">
              <MapPin size={16} aria-hidden="true" />
              〇〇市・〇〇町周辺に対応
            </div>
            <h1
              aria-label="一人で抱え込まなくて大丈夫。"
              className="animate-fade-up animate-delay-1 mt-8 text-4xl font-extrabold leading-[1.25] text-[#12323b] sm:text-5xl lg:text-6xl"
            >
              <span className="inline-block">一人で</span>
              <span className="inline-block">抱え込まなくて</span>
              <span className="inline-block">大丈夫。</span>
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-6 max-w-2xl text-lg leading-9 text-[#274b55] sm:text-xl">
              ご自宅で安心して生活できるよう、看護師が継続的にサポートします。
            </p>
            <div className="animate-fade-up animate-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0f766e] px-7 py-3 text-center text-base font-bold text-white shadow-xl shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-[#0d635d]"
              >
                相談してみる
              </a>
              <a
                href="#service"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#a8dcd8] bg-white/85 px-7 py-3 text-center text-base font-bold text-[#0f5f5a] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                支援内容を見る
              </a>
            </div>
            <div className="animate-fade-up animate-delay-3 mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["専門分野", "訪問看護"],
                ["対象", "ご本人・ご家族"],
                ["相談", "初回相談無料"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur"
                >
                  <p className="text-xs font-bold text-[#5f7d85]">{label}</p>
                  <p className="mt-1 text-sm font-bold text-[#12323b]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="text-sm font-bold text-[#0f766e]">訪問看護とは</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#12323b] sm:text-4xl">
              通院だけでは届きにくい日常を、自宅で支える看護サービスです。
            </h2>
            <p className="mt-5 leading-8 text-[#496a72]">
              訪問看護は、看護師がご自宅へ伺い、体調確認、服薬管理、療養生活、ご家族の不安まで継続的に支援するサービスです。病気そのものだけでなく、生活のしづらさや退院後の暮らしにも目を向けます。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {targets.map((target, index) => (
              <div
                key={target}
                className="animate-fade-up rounded-lg border border-[#d7eceb] bg-white p-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-900/10"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <CheckCircle2 className="text-[#13a58d]" size={22} aria-hidden="true" />
                <p className="mt-3 font-bold text-[#12323b]">{target}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#0f766e]">このようなお悩みはありませんか？</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#12323b] sm:text-4xl">
              小さな不安でも、続くと生活全体に影響します。
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {worries.map((worry) => (
              <div
                key={worry}
                className="group rounded-lg border border-[#d9eff0] bg-[#f7fbfb] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#9bd8cf] hover:bg-white"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-[#e3f6f1] text-[#0f766e] transition group-hover:scale-105">
                  <MessageCircleQuestion size={22} aria-hidden="true" />
                </span>
                <p className="mt-5 text-lg font-bold leading-8 text-[#12323b]">{worry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold text-[#0f766e]">サービス内容</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#12323b] sm:text-4xl">
                安心して暮らすために、医療と生活の両面から支援します。
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#dff7ee] px-6 py-3 text-sm font-bold text-[#0f5f5a] transition hover:-translate-y-0.5 hover:bg-[#cbefe5] sm:w-auto"
            >
              サービスについて相談
            </a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-lg border border-[#d7eceb] bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/10"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#ecf9f6] text-[#0f766e]">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-extrabold text-[#12323b]">{service.title}</h3>
                  </div>
                  <p className="mt-4 leading-8 text-[#496a72]">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf7f8] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
          <p className="text-sm font-bold text-[#0f766e]">対応エリア</p>
            <h2 className="mt-2 text-2xl font-extrabold leading-[1.4] text-[#12323b] sm:text-3xl">
              〇〇市、〇〇町周辺を中心に訪問します。
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["〇〇市", "〇〇町", "周辺地域"].map((area) => (
              <div
                key={area}
                className="rounded-lg border border-white bg-white/80 px-6 py-4 text-center font-bold text-[#0f5f5a] shadow-sm"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#0f766e]">ご利用開始までの流れ</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#12323b] sm:text-4xl">
              初めての方でも、必要な手続きを一つずつ案内します。
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {flow.map((item, index) => (
              <article key={item.title} className="relative rounded-lg border border-[#d7eceb] bg-white p-6 shadow-sm">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#0f766e] text-sm font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-[#12323b]">{item.title}</h3>
                <p className="mt-3 leading-8 text-[#496a72]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold text-[#0f766e]">よくある質問</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#12323b] sm:text-4xl">
              利用前に気になることをまとめました。
            </h2>
            <p className="mt-5 leading-8 text-[#496a72]">
              制度や費用は状況によって変わるため、実際の利用前には主治医や関係機関と確認しながら進めます。
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-[#d7eceb] bg-[#f7fbfb] p-5 open:bg-white open:shadow-lg open:shadow-teal-900/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#12323b]">
                  <span>{faq.question}</span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0f766e] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-8 text-[#496a72]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#0f766e]">スタッフ紹介</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#12323b] sm:text-4xl">
              医療と地域生活支援を知るスタッフが対応します。
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {staff.map((member) => (
              <article
                key={member.name}
                className="rounded-lg border border-[#d7eceb] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-14 items-center justify-center rounded-full bg-[#dff7ee] text-xl font-extrabold text-[#0f766e]">
                    {member.initial}
                  </span>
                  <h3 className="text-lg font-extrabold leading-7 text-[#12323b]">{member.name}</h3>
                </div>
                <p className="mt-5 leading-8 text-[#496a72]">{member.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#dff3f4] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold text-[#0f766e]">お問い合わせ</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#12323b] sm:text-4xl">
              まずは現在の状況をお聞かせください。
            </h2>
            <p className="mt-5 leading-8 text-[#496a72]">
              利用を決める前の相談でも問題ありません。ご本人、ご家族、医療・福祉関係者からの相談を受け付けています。
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="tel:0600000000"
                className="flex items-center gap-4 rounded-lg bg-white p-5 font-bold text-[#12323b] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone className="shrink-0 text-[#0f766e]" size={24} aria-hidden="true" />
                <span>06-0000-0000</span>
              </a>
              <a
                href="mailto:info@example.jp"
                className="flex items-center gap-4 rounded-lg bg-white p-5 font-bold text-[#12323b] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Mail className="shrink-0 text-[#0f766e]" size={24} aria-hidden="true" />
                <span>info@example.jp</span>
              </a>
            </div>
          </div>

          <form className="rounded-lg border border-white bg-white p-5 shadow-xl shadow-teal-900/10 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-[#365963]">お名前</span>
                <input
                  className="mt-2 h-12 w-full rounded-lg border border-[#c9e2e3] bg-[#f7fbfb] px-4 outline-none transition focus:border-[#0f766e] focus:bg-white focus:ring-4 focus:ring-[#b9efe2]"
                  type="text"
                  name="name"
                  placeholder="山田 太郎"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-[#365963]">ご連絡先</span>
                <input
                  className="mt-2 h-12 w-full rounded-lg border border-[#c9e2e3] bg-[#f7fbfb] px-4 outline-none transition focus:border-[#0f766e] focus:bg-white focus:ring-4 focus:ring-[#b9efe2]"
                  type="text"
                  name="contact"
                  placeholder="電話番号またはメール"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-[#365963]">相談内容</span>
              <select
                className="mt-2 h-12 w-full rounded-lg border border-[#c9e2e3] bg-[#f7fbfb] px-4 outline-none transition focus:border-[#0f766e] focus:bg-white focus:ring-4 focus:ring-[#b9efe2]"
                name="subject"
                defaultValue=""
              >
                <option value="" disabled>
                  選択してください
                </option>
                <option>利用を検討している</option>
                <option>家族について相談したい</option>
                <option>医療・福祉機関からの相談</option>
                <option>その他</option>
              </select>
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-[#365963]">メッセージ</span>
              <textarea
                className="mt-2 min-h-36 w-full rounded-lg border border-[#c9e2e3] bg-[#f7fbfb] px-4 py-3 outline-none transition focus:border-[#0f766e] focus:bg-white focus:ring-4 focus:ring-[#b9efe2]"
                name="message"
                placeholder="現在の状況や相談したい内容をご記入ください"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0f766e] px-7 py-3 text-base font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-[#0d635d]"
            >
              送信する
            </button>
            <p className="mt-4 text-sm leading-7 text-[#5f7d85]">
              架空サイトのポートフォリオ用フォームです。実運用時は送信先、個人情報保護方針、同意チェックを追加します。
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-[#12323b] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-extrabold">みらい訪問看護ステーション</p>
            <p className="mt-2 text-sm text-white/70">訪問看護 / 〇〇市・〇〇町周辺</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} aria-hidden="true" />
              安心できる在宅支援
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarCheck size={16} aria-hidden="true" />
              継続的な訪問
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 size={16} aria-hidden="true" />
              初回相談無料
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
