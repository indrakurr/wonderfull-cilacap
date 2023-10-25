import History1 from "../assets/history1.png"
import History2 from "../assets/history2.png"

function History () {
    return (
      <div className="container-history">
        <h2 className="title-history">History of Cilacap</h2>
        <div className="card-history">
          <div className="row no-gutters">
            <div className="col-xl-5 col-md-12 col-sm-12">
              <img src={History1} className="card-img" alt="..." />
            </div>
            <div className="col-xl-7 col-md-12 col-sm-12 d-flex align-items-center">
              <div className="card-body-history">
                <h4 className="card-title-history">Cilacap during the Kingdom era</h4>
                <p className="card-text">
                  Cilacap, located in the Central Java Province of Indonesia,
                  has a rich and captivating history during the kingdom era.
                  With its strategic position on the southern coast of Java,
                  Cilacap became a significant center of trade and a crucial
                  port for kingdoms like Mataram and Majapahit. Additionally,
                  the region is blessed with natural beauty, particularly its
                  mesmerizing beaches. The Pendem Fortress, a historical relic
                  from the Dutch colonial era, also stands witness to
                  significant events. Cilacap served as a meeting point for
                  various cultures and ethnicities, fostering harmony and
                  diversity as enduring characteristics. With its wealth of
                  history, enchanting natural landscapes, and diverse cultural
                  heritage, Cilacap remains an appealing destination for
                  visitors wishing to explore the enchantment of the kingdom era
                  in Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-history">
          <div className="row no-gutters">
            <div className="col-xl-5 col-md-12 col-sm-12">
              <img src={History2} className="card-img" alt="..." />
            </div>
            <div className="col-xl-7 col-md-12 col-sm-12 d-flex align-items-center">
              <div className="card-body">
                <h4 className="card-title-history">Cilacap during the Colonial era</h4>
                <p className="card-text">
                  During the colonial era, Cilacap, a coastal town in Central
                  Java, Indonesia, bore witness to a tumultuous chapter in its
                  history. Under the grip of Dutch colonial rule, Cilacap became
                  a significant hub for trade and administration, thanks to its
                  strategic location. The town's landscape was shaped by the
                  construction of colonial infrastructure, including the Pendem
                  Fortress, which not only served as a symbol of Dutch authority
                  but also offered panoramic views of the surrounding area.
                  Despite the challenges and upheavals of the colonial period,
                  Cilacap's rich cultural heritage endured, forming a complex
                  tapestry that reflects the resilience and spirit of its people
                  in the face of foreign domination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default History;