"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="landingPage">
        <div className="background"></div>
        <div className="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos tempora
          exercitationem repudiandae. Aliquam, officiis obcaecati optio
          doloremque earum numquam natus pariatur odio voluptatibus ut! Omnis
          alias mollitia aliquam atque porro.x
          <Image
            src="/assets/man.png"
            className="ml-auto"
            width={600}
            height={600}
          />
        </div>
      </section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium
      cupiditate libero repellat mollitia, voluptate numquam, laudantium saepe
      minus, ea voluptates aspernatur totam. Ullam a, aut sapiente explicabo
      officiis nesciunt? Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Quaerat neque dolor blanditiis nemo mollitia eveniet doloremque
      voluptatum aut sint? Ratione fuga quas iure minus, repellat quo doloribus.
      Veritatis suscipit dolorem illum omnis, atque nam, ipsam laudantium
      ratione aspernatur sint quasi explicabo doloremque obcaecati placeat vel
      ab accusamus perspiciatis tempora asperiores? Dicta et tempore nesciunt
      dolor at sequi unde distinctio ab temporibus quam eius aspernatur quasi
      voluptatibus placeat, accusamus nobis beatae. Optio eligendi reprehenderit
      quaerat quisquam adipisci qui quasi soluta, incidunt vel repellat, vitae
      commodi laboriosam dignissimos provident vero voluptates aliquam fuga est
      id asperiores totam ut amet laborum accusantium. Fugit, exercitationem
      illo! Provident vitae asperiores fugiat accusamus error quidem ipsa vero
      reiciendis iure magni. Incidunt nulla provident repudiandae quo magnam?
    </main>
  );
}
