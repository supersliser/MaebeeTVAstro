import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent } from '../astro.a141932b.mjs';
import 'html-escaper';
import { $ as $$BasicLayout } from './_...glob_.astro.c09ede59.mjs';
/* empty css                        *//* empty css                           *//* empty css                               */
const $$Astro$1 = createAstro();
const $$GalleryComp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GalleryComp;
  const { images } = Astro2.props;
  const images1 = [];
  const images2 = [];
  const images3 = [];
  const images4 = [];
  for (var i = 0; i < images.length; i++) {
    if (i % 4 == 0) {
      images1[i] = images[i];
    }
    if (i % 4 == 1) {
      images2[i] = images[i];
    }
    if (i % 4 == 2) {
      images3[i] = images[i];
    }
    if (i % 4 == 3) {
      images4[i] = images[i];
    }
  }
  return renderTemplate`

${maybeRenderHead($$result)}<div class="gallery astro-GL2LCU4L">
    <div class="column astro-GL2LCU4L">
        ${images1.map((post) => renderTemplate`<img${addAttribute(post, "src")} alt="picture" class="astro-GL2LCU4L">`)}
    </div>
    <div class="column astro-GL2LCU4L">
        ${images2.map((post) => renderTemplate`<img${addAttribute(post, "src")} alt="picture" class="astro-GL2LCU4L">`)}
    </div>
    <div class="column astro-GL2LCU4L">
        ${images3.map((post) => renderTemplate`<img${addAttribute(post, "src")} alt="picture" class="astro-GL2LCU4L">`)}
    </div>
    <div class="column astro-GL2LCU4L">
        ${images4.map((post) => renderTemplate`<img${addAttribute(post, "src")} alt="picture" class="astro-GL2LCU4L">`)}
    </div>
</div>`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/components/GalleryComp.astro");

const $$Astro = createAstro();
const title = "\u{1F438}";
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const subtitle = "frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog frog ";
  const PrimaryColor = "#99C68E";
  const NavTextColor = "#000000";
  const images = [
    "https://live.staticflickr.com/1680/25634833184_973e643306_b.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/39/European_Common_Frog_Rana_temporaria.jpg",
    "https://5steps.edu.sg/wp-content/uploads/2023/03/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZyZnJvZ19qdW5nbGVfYW1waGliaWFuX2FuaW1hbC1pbWFnZS1reWJkbHV1Yy5qcGc.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzuh0cidTZyd7klSG9dxP-HxBf4H3s2YB2Vwk68tYX1meiP0Ie312iaUocpvHgX0qIao&usqp=CAU",
    "https://live.staticflickr.com/6134/6206376675_9e94d52912_b.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_KQl4Dl6bRjb95Uh5Uti-76GAwiAi8gQqEigGLY9772PNSw42iYEul4XQktajknwzoU&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/commons/e/ea/Marsh_frog_%28Pelophylax_ridibundus%29.jpg",
    "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B2YNxXRTqzAVi_pzFK0n-LC91PnWhKXcpA&usqp=CAU",
    "https://s0.geograph.org.uk/geophotos/02/39/14/2391480_f1403ace.jpg",
    "https://upload.wikimedia.org/wikipedia/en/e/e4/Red_eyed_frog_oxtoby.jpg",
    "https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZyamlsbHdlbGxpbmd0b24wMDMyNi1pbWFnZS1rd3Z5am9ldC5qcGc.jpg",
    "https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3drNDM4MTE2OS13aWtpbWVkaWEtaW1hZ2Uta3A2aXQyMzEta3A2ajM5YmUuanBn.jpg",
    "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQxMDYtMDUyLWNoaW0uanBn.jpg",
    "https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxNjAwNTY5LWltYWdlLWt3dnZtN3M2LmpwZw.jpg",
    "https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQxMDYtMDk0LmpwZw.jpg",
    "https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxODg0MTQ0LXdpa2ltZWRpYS1pbWFnZS1rb3dkYmZ2ZC5qcGc.jpg",
    "https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvd2s3MTMyMjU3OS1pbWFnZS1rcHFqMTc5aS5qcGVn.jpeg",
    "https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmwzNzQwMTU5OTI2MC1pbWFnZS1rdTJncmhocC5qcGc.jpg",
    "https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQxMDYtMDM0LWNoaW0uanBn.jpg",
    "https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAwOS1rYWJvb21waWNzLTA3ODUuanBn.jpg",
    "https://images.rawpixel.com/image_500/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2ZsMjcxNjIyMTIzMDgtcHVibGljLWltYWdlLWtvbnRhcnIyLmpwZw.jpg",
    "https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmwyMDY0NzMyOTY2Mi1pbWFnZS1rdHdyMGJpcC5qcGc.jpg",
    "https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg3NzEyNDgtaW1hZ2Uta3d2eGU4NDAuanBn.jpg",
    "https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYyMTE1NTk5LXdpa2ltZWRpYS1pbWFnZS1rb3ducXhoaC5qcGc.jpg",
    "https://images.rawpixel.com/image_500/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZyamlsbHdlbGxpbmd0b24wMDMyNi1pbWFnZS1rd3Z5am9ldC5qcGc.jpg",
    "https://images.rawpixel.com/image_500/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZyZnJvZ190b2FkX2FuaW1hbF9hbmltYWxzLWltYWdlLWt5YmJpZ2h2LmpwZw.jpg",
    "https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQxMDYtMDMzLWNoaW0uanBn.jpg",
    "https://images.rawpixel.com/image_500/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3Vwd2s2MjMwNTE1Mi13aWtpbWVkaWEtaW1hZ2Uta293bWplbjQuanBn.jpg",
    "https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmw5MjYwMDMzOTY5LWltYWdlLWt0d3IwNGFmLmpwZw.jpg",
    "https://images.rawpixel.com/image_200/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsOTI2MDAzNTExNS1pbWFnZS1rdHk2ZGdpMS5qcGc.jpg",
    "https://images.rawpixel.com/image_500/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3Vwd2s2MjA2MDY3MS13aWtpbWVkaWEtaW1hZ2Uta293bzdiNXQuanBn.jpg",
    "https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvd2sxNDUyMTIxOC13aWtpbWVkaWEtaW1hZ2Uta3A2aXVzcXQta3A2ajR2dTcuanBn.jpg",
    "https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYyMTg0MjYyLXdpa2ltZWRpYS1pbWFnZS1rb3dneXJycC5qcGc.jpg",
    "https://images.rawpixel.com/image_500/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3Vwd2s2MTkwNDUzMy13aWtpbWVkaWEtaW1hZ2Uta293b3N3c2cuanBn.jpg"
  ];
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": title, "subtitle": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Gallery", $$GalleryComp, { "images": images })}
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/pages/other/\u{1F438}.astro");

const $$file = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/other/🐸.astro";
const $$url = "/other/🐸";

export { $$ as default, $$file as file, title, $$url as url };
