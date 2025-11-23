const scenes = [
  {
    id: 1,
    label: 'المشهد 1',
    timing: '0 – 2 ثانية',
    headline: 'كلنا نضيع أحيانًا…',
    visuals: 'خلفية داكنة مع خيوط إضاءة ناعمة تتحرك ببطء من اليمين لليسار لإيحاء نبض هادئ.',
    audio: 'نبضة هادئة تتكرر كل نصف ثانية مع طبقة موسيقى ملهمة منخفضة.',
    motion: 'ظهور النص بتأثير تلاشي تدريجي مع حركة طفيفة لأشعة الضوء.',
  },
  {
    id: 2,
    label: 'المشهد 2',
    timing: '2 – 4 ثانية',
    headline: 'لكن دائمًا هناك بوصلة تعيدنا للطريق الصحيح.',
    visuals: 'شخص يقف أمام طريق متشعب داخل ضباب خفيف، يظهر الضوء خلفه كدليل مرئي.',
    audio: 'الموسيقى تستمر مع إضافة طبقة وترية خفيفة، وصوت نفس قصير للدلالة على لحظة إدراك.',
    motion: 'الكاميرا تتحرك ببطء نحو الشخصية بينما يتوهج الضوء الخلفي تدريجيًا.',
  },
  {
    id: 3,
    label: 'المشهد 3',
    timing: '4 – 7 ثوان',
    headline: 'بوصلة الحياة…',
    visuals: 'جزيئات ضوء تتجمع في مركز الشاشة لتشكل بوصلة متوهجة ثلاثية الأبعاد.',
    audio: 'ارتفاع بسيط في الموسيقى مع صوت جزيئات الضوء وهي تتقاطع وتتجمع.',
    motion: 'الجزيئات تدور حول نفسها قبل أن تستقر في شكل بوصلة كاملة.',
  },
  {
    id: 4,
    label: 'المشهد 4',
    timing: '7 – 10 ثوان',
    headline: '7 خطوات تعيد توازنك وتفتح لك باب الازدهار.',
    visuals: 'غلاف الكتاب يظهر من يسار الشاشة إلى منتصفها محاطًا بإطار ضوئي رقيق.',
    audio: 'إضافة طبقة بيانو مشرقة مع توقف خفيف في الإيقاع لتسليط الضوء على الرسالة.',
    motion: 'الغلاف يتوقف في منتصف الشاشة بينما يلمع الإطار الضوئي مرة واحدة.',
  },
  {
    id: 5,
    label: 'المشهد 5',
    timing: '10 – 13 ثانية',
    headline: 'رحلة تغيير حقيقية… تبدأ الآن.',
    visuals: 'لقطات متعاقبة لشخص يكتب، يتأمل، ثم يعمل بثقة في مساحة مضيئة.',
    audio: 'الموسيقى تصل إلى ذروة ملهمة ثم تهدأ تدريجيًا لتترك أثرًا إيجابيًا.',
    motion: 'تقطيع سريع بثلاث لقطات متتابعة، ينتهي بمشهد ثابت لشخص يبتسم بثقة.',
  },
];

const timelineMarks = [
  { time: '0s', label: 'البداية' },
  { time: '2s', label: 'المشهد 2' },
  { time: '4s', label: 'المشهد 3' },
  { time: '7s', label: 'المشهد 4' },
  { time: '10s', label: 'المشهد 5' },
  { time: '13s', label: 'الختام' },
];

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <p className="hero-label">Storyboard Video Script</p>
        <h1>بوصلة الحياة</h1>
        <p className="hero-duration">مدة الفيديو: 12 – 15 ثانية</p>
        <p className="hero-sub">
          تصور بصري وصوتي متكامل لإطلاق ترويجي يلهم المشاهد للانطلاق في رحلته نحو التوازن والازدهار.
        </p>
      </header>

      <section className="timeline" aria-label="Timeline">
        <div className="timeline-line" />
        {timelineMarks.map((mark) => (
          <div key={mark.time} className="timeline-mark">
            <span className="timeline-point" />
            <span className="timeline-time">{mark.time}</span>
            <span className="timeline-label">{mark.label}</span>
          </div>
        ))}
      </section>

      <section className="scenes" aria-label="Storyboard scenes">
        {scenes.map((scene, index) => (
          <article key={scene.id} className="scene-card" style={{ animationDelay: `${index * 120}ms` }}>
            <span className="scene-label">{scene.label}</span>
            <div className="scene-meta">
              <span className="scene-timing">{scene.timing}</span>
            </div>
            <h2>{scene.headline}</h2>
            <div className="scene-detail">
              <h3>الصورة المقترحة</h3>
              <p>{scene.visuals}</p>
            </div>
            <div className="scene-detail">
              <h3>الصوت</h3>
              <p>{scene.audio}</p>
            </div>
            <div className="scene-detail">
              <h3>الحركة</h3>
              <p>{scene.motion}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="footer">
        <p>
          النهاية تُظهر شعار الكتاب مع عبارة قصيرة: <strong>"اكتشف البوصلة بداخلك"</strong>،
          وتختتم الموسيقى بنغمة متفائلة هادئة.
        </p>
      </footer>
    </main>
  );
}
