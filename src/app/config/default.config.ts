import { CokyLanguages } from "../core/langs/lang.model";

/**
 * Global constant for default configurations
 */
export const config: any[] = []

/**
 * Styles
 */

//navbar
config["navbar_color"] = "#ffffff";
config["navbar_hover_color"] = "#dadde1";
config["navbar_height"] = "48px";
config["navbar_icon_size"] = "25px";

//colors
config["back_color"] = "#F0F2F5";
config["back_color_hover"] = "#F0F2F5";
config["primary_color"] = "#A6C634";
config["primary_color_hover"] = "#A6C634";
config["secondary_color"] = "#343a40";
config["secondary_color_hover"] = "#343a40";
config["gray_color"] = "#DBE0DC";
config["gray_color_hover"] = "#DBE0DC";
config["dark_color"] = "#15214B";
config["dark_color_hover"] = "#15214B";
config["danger_color"] = "#FA6F6F";
config["danger_color_hover"] = "#FA6F6F";
config["alert_color"] = "#f1bc2a";
config["alert_color_hover"] = "#f1bc2a";
config["success_color"] = "#4cca79";
config["success_color_hover"] = "#4cca79";
config["info_color"] = "#1999c0";
config["info_color_hover"] = "#1999c0";

//sidebar
config["sidebar_color"] = "#F0F2F5";
config["sidebar_icon_size"] = "25px";
config["sidebar_button_selected_color"] = "#ffffff";
config["sidebar_button_hover_color"] = "#dadde1";
config["sidebar_text_color"] = "#000000";
config["sidebar_text_hover_color"] = "#000000";


//radius
config["default_radius"] = "5px";
config["dropdown_radius"] = "5px";
config["card_radius"] = "5px";
config["field_radius"] = "8px";
config["button_radius"] = "50px";

//app
config["app_title"] = "Coky Framework";
config["app_version"] = "1.0.1";
config["app_developer"] = "@Victorguz";
config["app_developer_link"] = "https://github.com/victorguz?tab=repositories";

//Default routes
config["route_on_login"] = "platform";
config["default_lang"] = CokyLanguages.ENGLISH;

//Default configuration
config["users_can_unlock_their_own_user"] = true;


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
