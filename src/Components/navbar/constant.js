export const itemsArray = (t) => [
    { pathName: '/', label: t("Appbar_home") },
    { pathName: '/food', label: t("Appbar_food") },
    { pathName: '/cars', label: t("Appbar_cars") },
    { pathName: '/realestate', label: t("Appbar_real-estate") },
    { pathName: '/test', label: t("Appbar_electronics") },
  ];


  export const subItemsArray = (t) => [
    [t("main_page_1"), t("main_page_2"), t("main_page_3")],
    [t("Food_item_1"), t("Food_item_2"), t("Food_item_3")],
    [t("car_item_1"), t("car_item_2"), t("car_item_3")],
    [t("real_estate_1"), t("real_estate_2"), t("real_estate_3")],
    [t("Electronics_item_1"), t("Electronics_item_2"), t("Electronics_item_3")],
  ];
  