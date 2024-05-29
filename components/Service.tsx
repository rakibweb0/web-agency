import { services } from "@/lib/LocalData";
import Container from "./Container";
import Button from "./ui/Button";

const Service = () => {
  return (
    <div id="services">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 lg:my-[150px] md:[&>*:nth-child(3)]:col-span-2 lg:[&>*:nth-child(3)]:col-span-1 lg:[&>*:nth-child(4)]:col-span-2 [&>*:nth-child(3)]:bg-primary [&>*:nth-child(3)]:text-text-color">
        {services.map((service, index) =>
          service.type === "cta" ? (
            <div key={index}>
              <h2 className="text-fontClamp66 font-cal font-semibold mb-6">
                {service.title}
              </h2>
              <p className=" mb-12">{service.description}</p>
              <Button
                label={service.btnLabel || ""}
                url={service.btnUrl || "/"}
                icon={true}
              />
            </div>
          ) : (
            <div
              key={index}
              className=" bg-secondary rounded-[32px] text-white p-6 lg:px-9 lg:py-11 space-y-3"
            >
              <h2 className=" text-[32px] font-bold ">{service.count}</h2>
              <h2 className=" text-2xl font-bold ">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          )
        )}
      </Container>
    </div>
  );
};

export default Service;
