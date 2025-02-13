import Image from "next/image";

const About = () => {
  return (
    <section className="py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Section 1: Text + Image */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Education & Early Career</h2>
            <p className="text-gray-600 leading-relaxed">
              I graduated from the Faculty of Technical Sciences in Novi Sad, department for 
              Graphic Engineering and Design. After graduation, I worked as a freelancer in the 
              field of graphic design, working and improving my skills in Adobe Photoshop, Adobe 
              Illustrator, Adobe InDesign, Adobe After Effects, and Adobe Premiere software.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/about-1.jpg" 
              alt="Graphic Engineering and Design" 
              width={500} 
              height={350} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Section 2: Image + Text */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Work Experience (2014-2022)</h2>
            <p className="text-gray-600 leading-relaxed">
              From 2014 to 2022, I worked full-time in Lomax Company, complementing my knowledge 
              in the above-mentioned software and working in various fields of graphic design: 
              product labels, product packaging, posters, flyers, logos, brochures, advertising 
              solutions, catalogs, trade promo booths, promo shelves, billboards, vehicle branding, 
              3D models of products, T-shirts design, video design, etc.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/about-2.jpg" 
              alt="Graphic Design Work Experience" 
              width={500} 
              height={350} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Section 3: Text + Image */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pre-Press & Printing</h2>
            <p className="text-gray-600 leading-relaxed">
              Besides design itself, I have experience in pre-press which is an important part of 
              getting the final print product, where design should be technically adjusted and 
              prepared with quality for the printing process. Printing techniques for which I can 
              prepare print files are: offset, flexo, digital, screen printing, pad printing, solvent, 
              and others. I can say that my knowledge of graphic design, pre-press, and printing 
              techniques is at a high level.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/about-3.jpg" 
              alt="Pre-Press & Printing Expertise" 
              width={500} 
              height={350} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Section 4: Image + Text */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Freelance Career (Since 2022)</h2>
            <p className="text-gray-600 leading-relaxed">
              Since November 2022, I have been working entirely as a self-employed designer.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/about-4.jpg" 
              alt="Freelance Designer" 
              width={500} 
              height={350} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
