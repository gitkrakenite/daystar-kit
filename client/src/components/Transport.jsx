import { AiOutlinePhone } from "react-icons/ai";

const Transport = () => {
  const dummyTransport = [
    {
      id: 1,
      from: "Athi Campus",
      to: "Nairobi Campus",
      time: "4:30PM - 5:00PM",
      driver: "Mr. Benson",
      location: "Bus Park",
    },
    {
      id: 2,
      from: "Athi Campus",
      to: "Nairobi Campus",
      time: "11:00AM - 11:30AM ",
      driver: "Mr. George",
      location: "Bus Park",
    },
    {
      id: 3,
      from: "Nairobi Campus",
      to: "Athi Campus",
      time: "12:30PM - 1:00AM ",
      driver: "Mr. George",
      location: "Outside Trinity Baptist. ",
    },
    {
      id: 4,
      from: "Nairobi Campus",
      to: "Athi Campus",
      time: "4:30PM - 5:00PM ",
      driver: "Mr. George",
      location: "Outside Trinity Baptist. ",
    },
  ];

  return (
    <div id="transport">
      {/* wrapper */}
      <div className="my-[2em] ">
        <h2 className="text-2xl text-[#02AEEE] mb-[20px]">
          Transport Schedules
        </h2>
        <div className="flex justify-around gap-[20px] flex-wrap">
          {dummyTransport.map((item) => (
            <div
              key={item.id}
              className="mb-[20px] bg-slate-900 py-[18px] px-[30px] rounded-lg"
            >
              <p className="mb-[15px] text-xl">{item.time}</p>
              <div className="flex flex-col gap-[10px]">
                <p>From : {item.from}</p>
                <p>To : {item.to}</p>
                <p>Driver : {item.driver}</p>
              </div>
              <p className="my-[15px]">Location : {item.location}</p>
              <div className="flex justify-end">
                <a
                  href="tel:+254 798556471"
                  className="text-[#02AEEE] flex items-center gap-[10px] "
                >
                  <AiOutlinePhone title="Click To Call" className="text-2xl" />
                  <p>Click To Call Us</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transport;
