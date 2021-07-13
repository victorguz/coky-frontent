import { CokyLanguages } from "../core/langs/lang.model";

/**
 * Global constant for default configurations
 */
const config: any[] = []

/**
 * Styles
 */

//navbar
config["css_style_properties"] = [
  { name: "navbar_color", value: "#ffffff" },
  { name: "navbar_hover_color", value: "#dadde1" },
  { name: "navbar_height", value: "48px" },
  { name: "navbar_icon_size", value: "25px" },
  //colors
  { name: "back_color", value: "#F0F2F5" },
  { name: "back_color_hover", value: "#F0F2F5" },
  { name: "primary_color", value: "#DD346D" },
  { name: "primary_color_hover", value: "#DD346D" },
  { name: "secondary_color", value: "#343a40" },
  { name: "secondary_color_hover", value: "#343a40" },
  { name: "gray_color", value: "#A4A4A4" },
  { name: "gray_color_hover", value: "#DBE0DC" },
  { name: "dark_color", value: "#15214B" },
  { name: "dark_color_hover", value: "#15214B" },
  { name: "danger_color", value: "#FA6F6F" },
  { name: "danger_color_hover", value: "#FA6F6F" },
  { name: "alert_color", value: "#f1bc2a" },
  { name: "alert_color_hover", value: "#f1bc2a" },
  { name: "success_color", value: "#4cca79" },
  { name: "success_color_hover", value: "#4cca79" },
  { name: "info_color", value: "#1999c0" },
  { name: "info_color_hover", value: "#1999c0" },
  //sidebar
  { name: "sidebar_color", value: "#F0F2F5" },
  { name: "sidebar_icon_size", value: "25px" },
  { name: "sidebar_button_selected_color", value: "#ffffff" },
  { name: "sidebar_button_hover_color", value: "#dadde1" },
  { name: "sidebar_text_color", value: "#000000" },
  { name: "sidebar_text_hover_color", value: "#000000" },
  //radius
  { name: "default_radius", value: "5px" },
  { name: "dropdown_radius", value: "5px" },
  { name: "card_radius", value: "8px" },
  { name: "field_radius", value: "8px" },
  { name: "button_radius", value: "50px" },
]

//app
config["app_title"] = "Coky Framework";
config["app_version"] = "1.0.1";
config["app_developer"] = "@Victorguz";
config["app_developer_link"] = "https://github.com/victorguz?tab=repositories";

//Default routes
config["route_on_login"] = "/platform";
config["route_on_cant_register"] = "/home";
config["route_on_forbidden"] = "/forbidden";
config["default_lang"] = CokyLanguages.ENGLISH;

//Default configuration
config["users_can_unlock_their_own_user"] = true;
config["users_can_register_themselves"] = true;
config["users_default_register_role"] = "GENERAL";

//Meta tags
config["meta_description"] = `We are facilitators of the raising of projects and ideas in digital environments. Through the strategic development of marketing, branding, creative design, and product development and software strategies, we help your company have a digital impact that is agile and innovative. We provide advice for companies, projects and ideas that already have a logistical route outlined in which we can find improvement options, both in branding, marketing, software and the business model in general.`
config["meta_keywords"] = ["graphic", "design", "software", "marketing", "web", "apps", "branding", "innovation", "creation"]


/**
 * Other expresive constants
 */


///////////////Local storage constants
export const LOCAL_STORAGE_SELECTED_LANG = "selected_lang"
export const LOCAL_STORAGE_USER = "user_info"
export const LOCAL_STORAGE_TOKEN = "token"

/**
 * Obtiene la configuración con la clave 'name'
 * @param name Nombre de la configuración
 * @returns {any}
 */
export function getConfig(name: string) {

  //find config on database ad return it if it's found.
  //return ConfigService.getConfig(name)
  //else

  return config[name]
}
