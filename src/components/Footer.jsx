import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function components() {
  return (
    <Footer container className="rounded-none dark:bg-gray-900 p-4">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0">
          <div className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
            <Link to="/" className="inline-block">
              <Footer.Brand
                src="./images/shauryotsava_logo2.png"
                alt="Shauryotsava Logo"
                name="Shauryotsava"
                // className="mx-auto sm:mx-0"
                className="w-20 h-20 md:w-100% md:h-100%  "
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto">
            <div className="text-center sm:text-left">
              <Footer.Title title="Shauryotsava" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.google.com/maps/place/Institute+of+Engineering+and+Technology+(IET)/@26.9177579,80.935588,16z/data=!4m10!1m2!2m1!1siet+lucknow!3m6!1s0x3999564d2761d695:0xffaa6ccef8c6ddae!8m2!3d26.9142926!4d80.9419138!15sCgtpZXQgbHVja25vd5IBB2NvbGxlZ2XgAQA!16s%2Fg%2F1215cd52?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="text-center sm:text-left"
                >
                  IET Lucknow, Uttar Pradesh
                </Footer.Link>
                <Footer.Link
                  href="mailto:shauryotsava@ietlucknow.ac.in"
                  className="text-center sm:text-left"
                >
                  Shauryotsava@ietlucknow.ac.in
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="text-center sm:text-left">
              <Footer.Title title="Contact us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="mailto:Sandeep8175063305@gmail.com"
                  className="text-center sm:text-left"
                >
                  Coordinator: Sandeep Kumar Patel <br />
                  Email: Sandeep8175063305@gmail.com <br />
                  Mobile: 6389181405
                </Footer.Link>
                <Footer.Link
                  href="mailto:mabhishekmishra029@gmail.com"
                  className="text-center sm:text-left"
                >
                  Coordinator: Abhishek Mishra <br />
                  Email: mabhishekmishra029@gmail.com <br />
                  Mobile: 6306505310
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <Footer.Copyright
            href="/"
            by="Shauryotsava"
            year={2025}
            className="text-center sm:text-left w-full sm:w-auto"
          />
          <div className="flex space-x-6 justify-center w-full sm:w-auto">
            <Footer.Icon
              href="https://www.facebook.com/share/15xD21VxVV/"
              target="_blank"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/shauryotsava_ietlko"
              target="_blank"
              icon={BsInstagram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default components;
