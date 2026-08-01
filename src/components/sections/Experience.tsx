export default function Experience() {
  return (
    <section id="certifications" className="certs-section">
      <div className="section-head reveal-up">
        <div className="eyebrow">Certifications</div>
        <h2>
          Always <span className="text-amber">learning.</span>
        </h2>
      </div>

      <div className="certs-ticker-wrap reveal-up">
        <div className="certs-masonry">
          {[
            {
              title: "Python Project for Data Science",
              by: "Coursera",
              alt: "Python Project for Data Science — Coursera",
              src: "/certificates/Python Project for Data Science.png",
            },
            {
              title: "Databases & SQL for Data Science",
              by: "Coursera",
              alt: "Databases and SQL for Data Science — Coursera",
              src: "/certificates/DB and SQL for Data Science with Python.png",
            },
            {
              title: "Data Analysis with Python",
              by: "Coursera",
              alt: "Data Analysis with Python — Coursera",
              src: "/certificates/Data Analysis with Python.png",
            },
            {
              title: "Deloitte Data Analyst Simulation",
              by: "Forage",
              alt: "Deloitte Data Analyst Simulation — Forage",
              src: "/certificates/Data Analyst Job Simulation.png",
            },
            {
              title: "Intro to Machine Learning",
              by: "Kaggle",
              alt: "Intro to Machine Learning — Kaggle",
              src: "/certificates/Intro to Machine Learning.png",
            },
          ].map((item) => (
            <div className="cert-polaroid reveal-up" key={item.title}>
              <div className="polaroid-img">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <div className="polaroid-caption">
                <span className="pol-title">{item.title}</span>
                <span className="pol-by">{item.by}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
