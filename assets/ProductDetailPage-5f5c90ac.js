import {
  _ as x,
  o as n,
  c as i,
  a as t,
  t as u,
  j as w,
  C as L,
  P as j,
  M as C,
  d as I,
  S,
  e as D,
  f as M,
  m as l,
  r as a,
  g as e,
  w as f,
  F as r,
  h as y,
  u as p,
  i as z,
  b as _,
  l as v,
} from "./index-5b735a91.js";
$(document).ready(function () {
  $(".add_btn").on("click", ".btn", function () {
    $(this).css("display", "none"),
      $(this).next(".add_num").css("display", "block");
  });
});
const V = {},
  F = { class: "", style: { width: "100%" } },
  A = t(
    "div",
    {
      class: "status",
      style: {
        color: "#3BB77E",
        "background-color": "#DEF9EC",
        display: "inline-block",
        "border-radius": "5px",
        "font-weight": "500",
        padding: "0 5px",
      },
    },
    " In Stock",
    -1
  ),
  R = {
    class: "title",
    style: {
      "font-size": "35px",
      "font-weight": "700",
      "line-height": "40px",
      padding: "3% 0",
    },
  },
  H = w(
    '<div class="rating"><i class="rating bx bxs-star" style="color:orange;"></i><i class="unrating bx bxs-star" style="color:#bab8b8;"></i><i class="rating_num">4.0</i></div><div class="price d-flex justify-content-start align-items-center gap-4"><div class="disPrice" style="color:#3BB77E;font-weight:700;font-size:38px;">$ 42</div><div class="salePrice" style="font-size:25px;font-weight:700;color:#7E7E7E;"><s>$ 38</s></div></div><div class="description mt-4" style="color:#7E7E7E;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero deserunt, voluptatum ducimus doloribus quo nemo totam nobis ad animi? Mollitia omnis laudantium quis recusandae illo. Reiciendis cum non dolorum dolore? </div><div class="action d-flex align-items-center gap-2 mt-2"><div class="add_btn" style="background-color:#3BB77E;border-radius:5px;width:70px;"><button class="btn" style="cursor:pointer;color:white;width:100%;height:33px;font-size:14px;">Add +</button><input type="number" class="add_num" value="1" style="width:100%;height:33px;border:2px solid #3BB77E;border-radius:5px;font-size:14px;"></div><div class="add_cart" style="background-color:#3BB77E;padding:5px;border-radius:5px;font-size:14px;height:33px;color:white;"><i class="bx bx-cart-alt"></i> Add To Cart </div><div class="favorite" style="padding:5px 10px;border-radius:5px;box-shadow:rgba(0, 0, 0, 0.16) 0px 1px 4px;"><i class="bx bx-heart"></i></div><div class="shuffle" style="padding:5px 10px;border-radius:5px;box-shadow:rgba(0, 0, 0, 0.16) 0px 1px 4px;"><i class="bx bx-shuffle"></i></div></div><div class="d-flex flex-column justify-content-end mt-5"><div class="vendor">Vendor: <span style="color:#7E7E7E;">NestMart</span></div><div class="sku">SKU: <span style="color:#7E7E7E;"> FWM15VKT</span></div></div>',
    5
  );
function T(c, h, E, k, B, g) {
  return n(), i("div", F, [A, t("div", R, u(c.title), 1), H]);
}
const q = x(V, [["render", T]]),
  K = "/Internet-Programming/assets/corn-3bc82486.png",
  W = {},
  U = {
    class: "img",
    style: {
      height: "100%",
      width: "100%",
      padding: "2%",
      "box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      "border-radius": "5px",
    },
  },
  G = t(
    "img",
    {
      src: K,
      style: { width: "100%", height: "100%", "object-fit": "contain" },
      alt: "",
    },
    null,
    -1
  ),
  J = [G];
function O(c, h) {
  return n(), i("div", U, J);
}
const Q = x(W, [["render", O]]);
const X = {
    name: "productDetail",
    props: {},
    components: {
      Category: L,
      Promotion: j,
      Menus: C,
      Products: I,
      Search_box: S,
      MenuItem: D,
      Show_case: M,
      ProductDetail: q,
      ProductImage: Q,
    },
    computed: {
      ...l(p, ["category"]),
      ...l(p, ["promotion"]),
      ...l(p, ["products"]),
      ...l(p, ["productCountsByCategory"]),
      productId() {
        return this.$route.params.productId;
      },
    },
  },
  Y = { class: "container", style: { "max-width": "1440px", margin: "auto" } },
  Z = { class: "header" },
  tt = {
    class: "navigaton h-full d-flex justify-content-between align-items-center",
  },
  et = t(
    "div",
    { class: "logoSection" },
    [t("img", { style: { "object-fit": "contain" }, src: z, alt: "" })],
    -1
  ),
  ot = {
    class:
      "navMenu d-flex justify-content-centerr align-items-center gap-3 me-4",
  },
  st = {
    class: "d-flex justify-content-center align-items-center gap-4 mt-3",
    style: { "list-style-type": "none" },
  },
  nt = t("hr", null, null, -1),
  it = { class: "menu d-flex justify-content-between align-items-center" },
  ct = { class: "allMenu" },
  at = {
    class: "d-flex justify-content-center align-items-center gap-3",
    style: { "list-style-type": "none" },
  },
  rt = t(
    "li",
    {
      class:
        "allCategory d-flex justify-content-center align-items-center gap-1",
      style: {
        "background-color": "#3BB77E",
        width: "250px",
        height: "45px",
        "border-radius": "5px",
      },
    },
    [
      t("i", { class: "bx bx-grid-alt" }),
      _(" Browser all categories "),
      t("i", { class: "bx bx-chevron-down" }),
    ],
    -1
  ),
  dt = w(
    '<div class="contactMenu d-flex justify-content-center align-items-center gap-2"><div class="icon mt-2"><i class="bx bx-headphone" style="font-size:36px;"></i></div><div class="contact"><div class="number" style="font-size:20px;color:#3BB77E;font-weight:700;">1900 - 8888</div><div class="status" style="font-size:12px;">24/7 support center</div></div></div>',
    1
  ),
  lt = t("hr", null, null, -1),
  pt = { key: 0, class: "productDetail" },
  ut = { class: "direction", style: { color: "#7E7E7E", padding: "1% 0" } },
  _t = t("i", { class: "bx bx-chevron-right" }, null, -1),
  xt = t("i", { class: "bx bx-chevron-right" }, null, -1),
  ht = { style: { color: "#3BB77E" } },
  gt = { class: "maniContent d-flex justify-content-between" },
  bt = {
    class: "d-flex align-items-center justify-content-center",
    style: {
      width: "50%",
      "box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      "border-radius": "5px",
    },
  },
  mt = { class: "content", style: { width: "50%", padding: "0 2%" } },
  ft = {
    class: "d-flex align-items-center justify-content-center my-4",
    style: { height: "100px", width: "50%", gap: "10px" },
  },
  yt = t(
    "div",
    {
      class: "back border px-2 py-1",
      style: { "border-radius": "50%", cursor: "pointer" },
    },
    [t("i", { class: "bx bx-left-arrow-alt", style: { "font-size": "15px" } })],
    -1
  ),
  vt = t(
    "div",
    {
      class: "next border px-2 py-1",
      style: { "border-radius": "50%", cursor: "pointer" },
    },
    [
      t("i", {
        class: "bx bx-right-arrow-alt",
        style: { "font-size": "15px" },
      }),
    ],
    -1
  ),
  wt = {
    class: "detail p-5 rounded mb-5",
    style: { "box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px" },
  },
  Et = t(
    "div",
    {
      class: "header d-flex align-items-center justify-content-start gap-3",
      style: { "font-weight": "700" },
    },
    [
      t(
        "div",
        {
          class: "description py-2 px-4",
          style: {
            "border-radius": "40px",
            "box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            color: "#3BB77E",
            "font-weight": "500",
            cursor: "pointer",
          },
        },
        "Description"
      ),
      t(
        "div",
        {
          class: "additionalInfo py-2 px-4",
          style: {
            "border-radius": "40px",
            "box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            "font-weight": "500",
            cursor: "pointer",
          },
        },
        "Additional Info"
      ),
      t(
        "div",
        {
          class: "reviews py-2 px-4",
          style: {
            "border-radius": "40px",
            "box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            "font-weight": "500",
            cursor: "pointer",
          },
        },
        "Reviews(3)"
      ),
    ],
    -1
  ),
  kt = { class: "content mt-5" },
  Bt = { style: { color: "#7E7E7E" } };
function $t(c, h, E, k, B, g) {
  const P = a("Search_box"),
    o = a("MenuItem"),
    b = a("RouterLink"),
    d = a("ProductImage"),
    N = a("ProductDetail");
  return (
    n(),
    i("div", Y, [
      t("header", Z, [
        t("nav", tt, [
          et,
          e(P),
          t("div", ot, [
            t("ul", st, [
              e(o, {
                menuName: "Account",
                icon: "bx-user",
                icon_color: "back",
                dropList: "none",
                font_weight: "400",
              }),
              e(o, {
                menuName: "Compare",
                icon: "bx-recycle",
                icon_color: "back",
                dropList: "none",
                font_weight: "400",
              }),
              e(o, {
                menuName: "Wishlist",
                icon: "bx-heart",
                icon_color: "back",
                dropList: "none",
                font_weight: "400",
              }),
              e(o, {
                menuName: "Cart",
                icon: "bx-cart",
                icon_color: "back",
                dropList: "none",
                font_weight: "400",
              }),
            ]),
          ]),
        ]),
      ]),
      nt,
      t("div", it, [
        t("div", ct, [
          t("ul", at, [
            rt,
            e(
              b,
              { to: "/categories/1" },
              {
                default: f(() => [
                  e(o, {
                    menuName: "Hot Deals",
                    icon: "bxs-hot",
                    icon_color: "#3BB77E",
                    dropList: "yes",
                    font_weight: "700",
                  }),
                ]),
                _: 1,
              }
            ),
            e(
              b,
              { to: "/" },
              {
                default: f(() => [
                  e(o, {
                    menuName: "Home",
                    icon: "none",
                    icon_color: "black",
                    dropList: "none",
                    font_weight: "700",
                  }),
                ]),
                _: 1,
              }
            ),
            e(o, {
              menuName: "Food",
              icon: "none",
              icon_color: "black",
              dropList: "yes",
              font_weight: "700",
            }),
            e(o, {
              menuName: "Vegetables",
              icon: "none",
              icon_color: "black",
              dropList: "yes",
              font_weight: "700",
            }),
            e(o, {
              menuName: "Drink",
              icon: "none",
              icon_color: "black",
              dropList: "none",
              font_weight: "700",
            }),
            e(o, {
              menuName: "Cookies",
              icon: "none",
              icon_color: "black",
              dropList: "none",
              font_weight: "700",
            }),
            e(o, {
              menuName: "Meat & Seafood",
              icon: "none",
              icon_color: "black",
              dropList: "yes",
              font_weight: "700",
            }),
            e(o, {
              menuName: "Bakery",
              icon: "none",
              icon_color: "black",
              dropList: "none",
              font_weight: "700",
            }),
          ]),
        ]),
        dt,
      ]),
      lt,
      (n(!0),
      i(
        r,
        null,
        y(
          c.products,
          (s) => (
            n(),
            i(
              r,
              null,
              [
                s.id == g.productId
                  ? (n(),
                    i("div", pt, [
                      t("div", ut, [
                        _(" Home "),
                        _t,
                        _(" " + u(s.type) + " ", 1),
                        xt,
                        t("span", ht, [
                          (n(!0),
                          i(
                            r,
                            null,
                            y(
                              c.category,
                              (m) => (
                                n(),
                                i(
                                  r,
                                  null,
                                  [
                                    m.id == s.id
                                      ? (n(),
                                        i(r, { key: 0 }, [_(u(m.name), 1)], 64))
                                      : v("", !0),
                                  ],
                                  64
                                )
                              )
                            ),
                            256
                          )),
                        ]),
                      ]),
                      t("div", gt, [
                        t("div", bt, [e(d)]),
                        t("div", mt, [
                          e(
                            N,
                            {
                              title: s.name,
                              rating: s.rate,
                              description: s.description,
                              disPrice: s.discountPrice,
                              sellPrice: s.sellPrice,
                            },
                            null,
                            8,
                            [
                              "title",
                              "rating",
                              "description",
                              "disPrice",
                              "sellPrice",
                            ]
                          ),
                        ]),
                      ]),
                      t("div", ft, [yt, e(d), e(d), e(d), vt]),
                      t("div", wt, [
                        Et,
                        t("div", kt, [t("article", Bt, u(s.description), 1)]),
                      ]),
                    ]))
                  : v("", !0),
              ],
              64
            )
          )
        ),
        256
      )),
    ])
  );
}
const Nt = x(X, [["render", $t]]);
export { Nt as default };
