import hospitalImg from '../../assets/hospital.png'

const WhyLorHospital = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div>
            <h2 className="text-4xl font-bold text-[#3F3F3F] mb-12">
              Nəyə görə Lor Hospital?
            </h2>

            <p className="text-[#0F0F0F] leading-relaxed mb-5">
              Lor Hospital – 2013-cü ildən fəaliyyət göstərən Azərbaycanın
              eləcə də Qafqazın ilk və yeganə ixtisaslaşmış Qulaq Burun Boğaz
              və Baş-Boyun Mərkəzidir.
            </p>

            <p className="text-[#0F0F0F] leading-relaxed mb-5">
              Azərbaycanda ilk Qulaq Burun Boğaz və Baş-Boyun Mərkəzi
              olmağımızın vermiş olduğu məsuliyyətlə poliklinika,
              laboratoriya, funksional diaqnostika müayinələrindən sonra
              pasiyentlərimizə daha dəqiq diaqnoz qoyularaq müalicələr
              aparılır.
            </p>

            <p className="text-[#0F0F0F] leading-relaxed">
              Endoskopik, mikroskopik və lazer texnologiyalarının istifadəsi
              dəqiq diaqnostikaya, hətta çətin əməliyyatlar zamanı minimal
              travmaya, bərpa dövrünü qısaltmağa və qısa müddətdə normal
              gündəlik həyata qayıtmağa imkan yaradır.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <img
              src={hospitalImg}
              alt="Lor Hospital"
              className="w-full max-h-[620px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyLorHospital
