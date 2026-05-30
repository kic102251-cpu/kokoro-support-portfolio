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
  "退院後の生活が不安",
  "自宅での療養を続けたい",
  "服薬や体調管理が心配",
  "家族だけで支えるのが難しい",
];

const targets = [
  "体調確認",
  "服薬管理",
  "医療処置の補助",
  "リハビリ",
  "退院後支援",
  "ご家族支援",
  "主治医・ケアマネとの連携",
];

const services = [
  {
    title: "体調確認",
    text: "血圧、体温、症状の変化など、訪問時に確認する内容を分かりやすく掲載できます。",
    icon: Stethoscope,
  },
  {
    title: "服薬管理",
    text: "飲み忘れや服薬への不安について、どのような支援があるかを伝える枠です。",
    icon: Pill,
  },
  {
    title: "医療処置の補助",
    text: "主治医の指示に基づく処置や観察について、実案件では対応範囲を整理して掲載します。",
    icon: ClipboardList,
  },
  {
    title: "リハビリ・生活支援",
    text: "日常生活の動きや生活環境に関する支援内容を、利用者さん目線で整理します。",
    icon: Home,
  },
  {
    title: "ご家族への相談支援",
    text: "ご家族が相談できる内容や連絡方法を明確にし、問い合わせにつながりやすくします。",
    icon: Users,
  },
  {
    title: "主治医・ケアマネとの連携",
    text: "医療機関、ケアマネジャー、関係サービスとの連携体制を伝えるサンプル枠です。",
    icon: Sparkles,
  },
];

const flow = [
  {
    title: "お問い合わせ",
    text: "ご本人、ご家族、相談支援員、医療機関など、相談できる窓口を分かりやすく示します。",
  },
  {
    title: "状況確認",
    text: "現在の困りごと、生活環境、希望する支援内容など、確認する項目を整理します。",
  },
  {
    title: "主治医・ケアマネ等との確認",
    text: "利用に必要な指示書やサービス調整について、関係者と確認します。",
  },
  {
    title: "利用開始",
    text: "訪問内容や頻度が決まるまでの流れを、初めて見る方にも伝わる形で掲載します。",
  },
];

const faqs = [
  {
    question: "家族からの相談でも大丈夫ですか？",
    answer:
      "実案件では、ご家族から相談できるかどうか、相談時に伝える内容を分かりやすく掲載します。",
  },
  {
    question: "利用には主治医の指示が必要ですか？",
    answer:
      "訪問看護の利用に関わる主治医の指示書や確認事項を、利用前に理解しやすい形で案内します。",
  },
  {
    question: "介護保険・医療保険のどちらで利用できますか？",
    answer:
      "年齢、疾患、要介護認定の有無などによって異なります。実案件では判断に必要な情報をわかりやすく案内します。",
  },
  {
    question: "相談前に準備するものはありますか？",
    answer:
      "現在の困りごと、主治医やケアマネジャーの有無、利用を検討している理由を簡単に整理しておくと相談が進めやすくなります。",
  },
];

const staff = [
  {
    name: "管理者 / 訪問看護師",
    initial: "K",
    text: "実案件では、管理者の経験や事業所として大切にしている方針を紹介できます。",
  },
  {
    name: "訪問看護師",
    initial: "S",
    text: "訪問時の雰囲気や得意な支援分野を伝えることで、相談前の不安を減らします。",
  },
  {
    name: "相談連携担当",
    initial: "M",
    text: "医療機関、ケアマネジャー、ご家族との連携体制をわかりやすく掲載できます。",
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
              <span className="block text-xs text-[#51717a]">訪問看護LP制作サンプル / 架空デモ</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#365963] lg:flex">
            <a className="transition hover:text-[#0f766e]" href="#about">
              伝えること
            </a>
            <a className="transition hover:text-[#0f766e]" href="#service">
              サービス
            </a>
            <a className="transition hover:text-[#0f766e]" href="#flow">
              利用の流れ
            </a>
            <a className="transition hover:text-[#0f766e]" href="#contact">
              問い合わせ導線
            </a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-[#0f766e] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-[#0d635d] sm:inline-flex"
          >
            サンプル構成を見る
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
              紀南エリア・三重南部エリアの事業所を想定した架空デモ
            </div>
            <p className="animate-fade-up mt-4 inline-block rounded-lg border border-amber-200 bg-amber-50/90 px-4 py-3 text-sm font-bold leading-7 text-amber-900 shadow-sm">
              ※このページはHP/LP制作サービスの架空デモです。実在の事業所ではありません。
            </p>
            <h1
              aria-label="訪問看護サービスを、利用者さんとご家族に分かりやすく伝える1ページ。"
              className="animate-fade-up animate-delay-1 mt-8 text-4xl font-extrabold leading-[1.25] text-[#12323b] sm:text-5xl lg:text-6xl"
            >
              <span className="inline-block">訪問看護サービスを、</span>
              <span className="inline-block">利用者さんとご家族に</span>
              <span className="inline-block">分かりやすく伝える</span>
              <span className="inline-block">1ページ。</span>
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-6 max-w-2xl text-lg leading-9 text-[#274b55] sm:text-xl">
              サービス内容、対応エリア、利用開始までの流れ、相談窓口をスマホで見やすく整理した制作サンプルです。
            </p>
            <div className="animate-fade-up animate-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0f766e] px-7 py-3 text-center text-base font-bold text-white shadow-xl shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-[#0d635d]"
              >
                サンプル構成を見る
              </a>
              <a
                href="#service"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#a8dcd8] bg-white/85 px-7 py-3 text-center text-base font-bold text-[#0f5f5a] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                サービス内容を見る
              </a>
            </div>
            <div className="animate-fade-up animate-delay-3 mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["専門分野", "訪問看護"],
                ["対象", "利用者さん・ご家族"],
                ["相談", "相談導線を明確化"],
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
            <p className="text-sm font-bold text-[#0f766e]">訪問看護の案内ページで伝えること</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.35] text-[#12323b] sm:text-4xl">
              初めて見る方にも、サービス内容と相談方法が伝わる構成にできます。
            </h2>
            <p className="mt-5 leading-8 text-[#496a72]">
              訪問看護では、看護師などがご自宅へ伺い、体調確認、服薬管理、医療処置の補助、リハビリ、ご家族への相談支援などを行います。このサンプルでは、初めて見る方にもサービス内容と相談方法が伝わりやすい構成を意識しています。
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
              利用を考える方が、最初に抱えやすい不安を整理します。
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
                サービス内容は、見た人がすぐ理解できる単位で整理します。
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#dff7ee] px-6 py-3 text-sm font-bold text-[#0f5f5a] transition hover:-translate-y-0.5 hover:bg-[#cbefe5] sm:w-auto"
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
              実案件では、対応エリア・訪問可能地域を分かりやすく掲載します。
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["紀南エリア", "三重南部エリア", "周辺地域"].map((area) => (
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
              実案件では、スタッフの雰囲気や専門性を分かりやすく紹介できます。
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
              相談しやすい導線を、ページ下部にまとめます。
            </h2>
            <p className="mt-5 leading-8 text-[#496a72]">
              電話、メール、フォームをまとめて掲載することで、利用者さんやご家族が次に何をすればよいか判断しやすくします。
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="tel:0000000000"
                className="flex items-center gap-4 rounded-lg bg-white p-5 font-bold text-[#12323b] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone className="shrink-0 text-[#0f766e]" size={24} aria-hidden="true" />
                <span>0000-00-0000</span>
              </a>
              <a
                href="mailto:demo@example.jp"
                className="flex items-center gap-4 rounded-lg bg-white p-5 font-bold text-[#12323b] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Mail className="shrink-0 text-[#0f766e]" size={24} aria-hidden="true" />
                <span>demo@example.jp</span>
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
                <option>サービス内容を知りたい</option>
                <option>利用開始の流れを知りたい</option>
                <option>家族から相談したい</option>
                <option>その他</option>
              </select>
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-[#365963]">メッセージ</span>
              <textarea
                className="mt-2 min-h-36 w-full rounded-lg border border-[#c9e2e3] bg-[#f7fbfb] px-4 py-3 outline-none transition focus:border-[#0f766e] focus:bg-white focus:ring-4 focus:ring-[#b9efe2]"
                name="message"
                placeholder="確認したい内容をご記入ください"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0f766e] px-7 py-3 text-base font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-[#0d635d]"
            >
              送信する
            </button>
            <p className="mt-4 text-sm leading-7 text-[#5f7d85]">
              ※このフォームは架空デモです。実運用時は送信先設定、個人情報保護方針、同意チェックを追加します。
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-[#12323b] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-extrabold">みらい訪問看護ステーション</p>
            <p className="mt-2 text-sm text-white/70">訪問看護LP制作サンプル / 架空デモ</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} aria-hidden="true" />
              制作サンプル
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarCheck size={16} aria-hidden="true" />
              スマホ対応
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 size={16} aria-hidden="true" />
              問い合わせ導線
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
