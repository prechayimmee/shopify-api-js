import Base, {ResourcePath} from '../../base-rest-resource';
import {SessionInterface} from '../../auth/session/types';
import {ApiVersion} from '../../base-types';

import {Country} from './country';
import {Currency} from './currency';
import {Province} from './province';

interface AllArgs {
  [key: string]: unknown;
  session: SessionInterface;
  fields?: unknown;
}

export class Shop extends Base {
  public static API_VERSION = ApiVersion.October21;

  protected static NAME = 'shop';
  protected static PLURAL_NAME = 'shops';
  protected static HAS_ONE: {[key: string]: typeof Base} = {
    country: Country,
    currency: Currency,
    province: Province
  };
  protected static HAS_MANY: {[key: string]: typeof Base} = {};
  protected static PATHS: ResourcePath[] = [
    {http_method: "get", operation: "get", ids: [], path: "shop.json"}
  ];

  public static async all(
    {
      session,
      fields = null,
      ...otherArgs
    }: AllArgs
  ): Promise<Shop[]> {
    const response = await Shop.baseFind({
      session: session,
      urlIds: {},
      params: {fields: fields, ...otherArgs},
    });

    return response as Shop[];
  }

  public address1: string | null;
  public address2: string | null;
  public checkout_api_supported: boolean | null;
  public city: string | null;
  public cookie_consent_level: string | null;
  public country: Country | null | {[key: string]: any};
  public country_code: string | null;
  public country_name: string | null;
  public county_taxes: string | null;
  public created_at: string | null;
  public currency: Currency | null | {[key: string]: any};
  public customer_email: string | null;
  public domain: string | null;
  public eligible_for_card_reader_giveaway: boolean | null;
  public eligible_for_payments: boolean | null;
  public email: string | null;
  public enabled_presentment_currencies: string[] | null;
  public finances: boolean | null;
  public force_ssl: boolean | null;
  public google_apps_domain: string | null;
  public google_apps_login_enabled: string | null;
  public has_discounts: boolean | null;
  public has_gift_cards: boolean | null;
  public has_storefront: boolean | null;
  public iana_timezone: string | null;
  public id: number | null;
  public latitude: number | null;
  public longitude: number | null;
  public money_format: string | null;
  public money_in_emails_format: string | null;
  public money_with_currency_format: string | null;
  public money_with_currency_in_emails_format: string | null;
  public multi_location_enabled: boolean | null;
  public myshopify_domain: string | null;
  public name: string | null;
  public password_enabled: boolean | null;
  public phone: string | null;
  public plan_display_name: string | null;
  public plan_name: string | null;
  public pre_launch_enabled: boolean | null;
  public primary_locale: string | null;
  public primary_location_id: number | null;
  public province: Province | null | {[key: string]: any};
  public province_code: string | null;
  public requires_extra_payments_agreement: boolean | null;
  public setup_required: boolean | null;
  public shop_owner: string | null;
  public source: string | null;
  public tax_shipping: string | null;
  public taxes_included: string | null;
  public timezone: string | null;
  public updated_at: string | null;
  public weight_unit: string | null;
  public zip: string | null;
}