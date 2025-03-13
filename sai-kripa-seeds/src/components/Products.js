import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <section className="products-section">
      <h1>Our Products</h1>
      <div className="products-categories">
      <div className="category">
          <h2>Peas</h2>
          <p>Explore our premium range of pea varieties, carefully selected for their high yield, excellent taste, and suitability for a wide range of farming environments.</p>

          <div className="pea-varieties">
            <div className="pea-variety">
              <img src="/images/GS-10.jpeg" alt="GS-10 Pea" />
              <h3>GS-10</h3>
              <p>A high-yielding, disease-resistant variety known for its excellent flavor and robust growth.</p>
            </div>

            <div className="pea-variety">
              <img src="/images/AP-3.jpg" alt="AP-3 Pea" />
              <h3>AP-3</h3>
              <p>AP-3 offers great flavor and disease resistance, ideal for both small and large-scale cultivation.</p>
            </div>

            <div className="pea-variety">
              <img src="/images/DANTE-12.jpg" alt="DANTE-12 Pea" />
              <h3>DANTE-12</h3>
              <p>This variety is popular for its high yield and resilience to harsh weather conditions.</p>
            </div>

            <div className="pea-variety">
              <img src="/images/KASHIUDAY.jpg" alt="KASHIUDAY Pea" />
              <h3>KASHIUDAY</h3>
              <p>KASHIUDAY is a premium pea variety known for its excellent germination rate and robust crops.</p>
            </div>

            <div className="pea-variety">
              <img src="/images/M-7.jpg" alt="M-7 Pea" />
              <h3>M-7</h3>
              <p>M-7 is known for its high yield and superb taste, making it a favorite among farmers and gardeners.</p>
            </div>

            <div className="pea-variety">
              <img src="/images/KASHINANDINI.jpg" alt="KASHINANDINI Pea" />
              <h3>KASHINANDINI</h3>
              <p>A variety that promises strong, healthy growth and produces sweet, tender peas.</p>
            </div>
          </div>
        </div>
        <div className="category">
          <h2>Wheat</h2>
          <p>Our premium wheat varieties are carefully chosen for their high yield, disease resistance, and overall quality, making them perfect for both small-scale and large-scale farming.</p>

          <div className="wheat-varieties">
            <div className="wheat-variety">
              <img src="/images/DBW-187.png" alt="DBW 187 Wheat" />
              <h3>DBW 187</h3>
              <p>A highly adaptable variety of wheat, known for its excellent disease resistance and high yield.</p>
            </div>

            <div className="wheat-variety">
              <img src="/images/DBW-303.jpg" alt="DBW 303 Wheat" />
              <h3>DBW 303</h3>
              <p>DBW 303 is a high-yielding variety that thrives in diverse climatic conditions, offering excellent quality grain.</p>
            </div>

            <div className="wheat-variety">
              <img src="/images/DBW-322.jpg" alt="DBW 322 Wheat" />
              <h3>DBW 322</h3>
              <p>DBW 322 is a popular variety known for its drought tolerance and high-quality grain output.</p>
            </div>

            <div className="wheat-variety">
              <img src="/images/PUJA-TEJAS.jpg" alt="PUJA TEJAS Wheat" />
              <h3>PUJA TEJAS</h3>
              <p>PUJA TEJAS provides great resistance to wheat rust and is known for its excellent grain yield.</p>
            </div>

            <div className="wheat-variety">
              <img src="/images/SUPER-303.jpg" alt="SUPER 303 Wheat" />
              <h3>SUPER 303</h3>
              <p>SUPER 303 offers high-quality wheat grains and performs well in a variety of soil types.</p>
            </div>

            <div className="wheat-variety">
              <img src="/images/EAGLE-95.jpg" alt="EAGLE 95 Wheat" />
              <h3>EAGLE 95</h3>
              <p>EAGLE 95 is known for its strong resistance to diseases and pests, ensuring a bountiful harvest.</p>
            </div>

            <div className="wheat-variety">
              <img src="/images/SUPER-DBW-303.jpg" alt="SUPER DBW 303 Wheat" />
              <h3>SUPER DBW 303</h3>
              <p>A super variety with exceptional yield and adaptability to different soil conditions.</p>
            </div>

            <div className="wheat-variety">
              <img src="/images/SUPER-05.jpg" alt="SUPER 05 Wheat" />
              <h3>SUPER 05</h3>
              <p>SUPER 05 is a highly preferred variety for its superior grain quality and resilience to pests.</p>
            </div>
          </div>
        </div>

      
        <div className="category">
          <h2>Pulses</h2>
          <p>Our Pulses varieties are rich in protein and full of flavor, offering excellent yield and adaptability. Choose from our different types of lentils, each with unique characteristics and benefits.</p>

          <div className="lentil-varieties">
            {/* Red Lentil Section */}
            <div className="lentil-type">
              <h3>Red Lentil (Masoor)</h3>
              <p>Red lentils are packed with nutrition and are perfect for various culinary uses. Our varieties are known for their high yield and excellent quality.</p>

              <div className="lentil-variety">
                <h4>Kota Masoor 2 (RKL 14-20)</h4>
                <img src="/images/Kota-Masoor-2.jpeg" alt="Kota Masoor 2" />
                <p>A high-yield variety, perfect for both small and large-scale farming.</p>
              </div> 

              <div className="lentil-variety">
                <h4>Raj Vijay Lentil 13-7 (RVL 13-7)</h4>
                <img src="/images/Raj-Vijay-Lentil-13-7.jpg" alt="Raj Vijay Lentil 13-7" />
                <p>Known for its excellent flavor and robust growth, this variety is favored by farmers.</p>
              </div>

              <div className="lentil-variety">
                <h4>L-4727</h4>
                <img src="/images/L-4727.jpg" alt="L-4727" />
                <p>L-4727 is a variety that offers strong growth and high disease resistance.</p>
              </div>
            </div>

            {/* Green Gram Section */}
            <div className="lentil-type">
              <h3>Green Gram (Moong)</h3>
              <p>Green Gram is a highly nutritious legume, perfect for various dishes. Our varieties have high germination rates and resilience to pests.</p>

              <div className="lentil-variety">
                <h4>IPM 410-3 (Shikha)</h4>
                <img src="/images/IPM-410-3.jpg" alt="IPM 410-3 (Shikha)" />
                <p>IPM 410-3 offers excellent yield and is highly resistant to common pests and diseases.</p>
              </div>
            </div>

            {/* Black Gram Section */}
            <div className="lentil-type">
              <h3>Black Gram (Urd)</h3>
              <p>Black Gram is an essential legume used in many cuisines. Our varieties are known for their rich protein content and robust growth.</p>

              <div className="lentil-variety">
                <h4>IPU 17-1</h4>
                <img src="/images/IPU-17-1.jpg" alt="IPU 17-1" />
                <p>A highly productive variety, well-suited for various climatic conditions.</p>
              </div>

              <div className="lentil-variety">
                <h4>Pant Urd-12</h4>
                <img src="/images/Pant-Urd-12.jpg" alt="Pant Urd-12" />
                <p>Pant Urd-12 is known for its strong growth and resistance to diseases.</p>
              </div>

              <div className="lentil-variety">
                <h4>Pant Urd-7</h4>
                <img src="/images/Pant-Urd-7.jpg" alt="Pant Urd-7" />
                <p>This variety yields high-quality black gram and performs well under diverse conditions.</p>
              </div>

              <div className="lentil-variety">
                <h4>Pant Urd-8</h4>
                <img src="/images/Pant-Urd-8.jpg" alt="Pant Urd-8" />
                <p>Pant Urd-8 has strong disease resistance and delivers high yields.</p>
              </div>

              <div className="lentil-variety">
                <h4>Pant Urd-9</h4>
                <img src="/images/Pant-Urd-9.jpg" alt="Pant Urd-9" />
                <p>Known for its resilience to pests and excellent yield.</p>
              </div>

              <div className="lentil-variety">
                <h4>Pant Urd (10-23)</h4>
                <img src="/images/Pant-Urd-10-23.jpg" alt="Pant Urd (10-23)" />
                <p>This variety is popular for its high yield and ease of cultivation.</p>
              </div>

              <div className="lentil-variety">
                <h4>IPU 10-26</h4>
                <img src="/images/IPU-10-26.jpg" alt="IPU 10-26" />
                <p>A superior variety offering high productivity and disease resistance.</p>
              </div>

              <div className="lentil-variety">
                <h4>IPU 13-1</h4>
                <img src="/images/IPU-13-1.jpg" alt="IPU 13-1" />
                <p>IPU 13-1 has high germination rates and is resistant to several common diseases.</p>
              </div>

              <div className="lentil-variety">
                <h4>VBN 8 (VBG 09-005)</h4>
                <img src="/images/VBN-8.jpg" alt="VBN 8" />
                <p>A widely grown variety with strong adaptability to different climates.</p>
              </div>

              <div className="lentil-variety">
                <h4>Indira Urd Pratham (RU 03-14)</h4>
                <img src="/images/Indira-Urd-Pratham.jpg" alt="Indira Urd Pratham" />
                <p>Indira Urd Pratham offers high yield and is popular for its excellent quality.</p>
              </div>

              <div className="lentil-variety">
                <h4>IPU 11-02</h4>
                <img src="/images/IPU-11-02.jpg" alt="IPU 11-02" />
                <p>This variety is well-known for its disease resistance and high yield.</p>
              </div>

              <div className="lentil-variety">
                <h4>Kota Urd 3 (KPU 524-65)</h4>
                <img src="/images/Kota-Urd-3.jpg" alt="Kota Urd 3" />
                <p>Known for its excellent quality, this variety performs well under diverse conditions.</p>
              </div>

              <div className="lentil-variety">
                <h4>Kota Urd 4 (KPU 12-1735)</h4>
                <img src="/images/Kota-Urd-4.jpg" alt="Kota Urd 4" />
                <p>Another high-quality variety from Kota, yielding excellent crops.</p>
              </div>

              <div className="lentil-variety">
                <h4>Vallabh Urd - I</h4>
                <img src="/images/Vallabh-Urd-I.jpg" alt="Vallabh Urd - I" />
                <p>Vallabh Urd-I offers high yield and is widely used for its versatility in cooking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
