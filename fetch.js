import { readFromJSONFile, writeToJSONFile } from './fileUtility.js';

export async function fetch_course_data(id) {
  const url = "https://umass.collegescheduler.com/api/terms/Fall%202023/subjects/" + id + "/courses";
  return fetch(url, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Microsoft Edge\";v=\"115\", \"Chromium\";v=\"115\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "_ga=GA1.1.32966608.1686714406; ph_foZTeM1AW8dh5WkaofxTYiInBhS4XzTzRqLs50kVziw_posthog=%7B%22distinct_id%22%3A%2218953858d8621ce-0cc9769a852e13-7e565470-144000-18953858d872989%22%2C%22%24device_id%22%3A%2218953858d8621ce-0cc9769a852e13-7e565470-144000-18953858d872989%22%2C%22%24user_state%22%3A%22anonymous%22%2C%22extension_version%22%3A%221.5.5%22%2C%22%24session_recording_enabled_server_side%22%3Afalse%2C%22%24autocapture_disabled_server_side%22%3Afalse%2C%22%24active_feature_flags%22%3A%5B%5D%2C%22%24enabled_feature_flags%22%3A%7B%22enable-session-recording%22%3Afalse%2C%22sourcing%22%3Afalse%2C%22only-company-edit%22%3Afalse%2C%22job-lists%22%3Afalse%7D%2C%22%24feature_flag_payloads%22%3A%7B%7D%7D; __RequestVerificationToken=AH9c4M5FxMMD9aCHnS4b5akpbhS5edBDHOekR2ZQawlvvqvWCCgywXj3qNDPvuMEfsdWlL1LEgOfLCkUpY4-S9ZA0Hg1; .AspNet.Cookies=Mu1-CTlFyVqeEwiZGm99WVCqZUQcsKM7fTgERCxoy2D4mn66yxFfPztMcUAUEfi43kcgt10ebe9eWCeMoS_6uq0Fipo4bfeR154GwegNZTAbnoH7qUJMnepG87yoGJRBEjs9GDodGCK8iPF8G2vBzaYLt_tJHFhyEcKh920HmKBH9XLxdWAcpSUTJTMmcu4hDV3A6pAA3AgBXFjAOYW6LhYRDj9NJpDItFhPTIsOEGtKR6eysphWStm3FxBTVnPLOWD2BFUsHjIQpAGL1weir_Gbf5OoEAqOVMU4v97fK4g97PDHeKQPMtnXQXIBMmJKaumvTv8W70L-LOdfvIqpYBnvtzJ3A41vL206TDAx3_OShALs725-0SNFK9CN0byy3YyY-LpnIOzK_xiYU5X_Z_I2NAOUawaSrL-QSoo9O_iraI5i_BJoUKwHvycsQANuCHbXQ0Ile07T3G7VzNXMS-ryzqOhvVoezzUg9wqKA2dhE7UubV7LsVM3JExfaAwl0vWDzxnNd7ya2aCfs32ZU7oNLht3nrQHlSYkEO42XhDHj95OqftZEUrUDzz0ROCKxH9j_OFlivBEGTDXJ4mDwYkBWw7a5R2I6rBJnjTZW0J9QAlOHcm9ANYB1bPc3fbvR219w1rvX5mtvHwtCl9Ob_pwMN-lgiVEledko_ReV2N6UELx6z-iQpEzgbPYNflecbbHi4iwSKq1dRu1IL3YyghY_xFjkEOwBPU3jmGddtWEaeiqnZ4xKShdzjC0X1G_CGRCpdsW2mZgyZqRyOEbn0Bat0lrKCzO5cdIEfSCLhMMhjDoQ_1uyhpVVHmWt0lK_Ed-ATp_cfBHFEi5y3ArpwgSQAne4sxK8dcWXfbp63qZLCuB7Ld1iCIDOZgHVZfvtRXPmTbTVONUfERF8n0zEItZGKNZkO79Le8F74319OmBu-tzFvA524oj13YJq4VOAOPhiYgdb4368Z6LhBwJjbk-4UFMBJLDXfHn_CxU6DjqpvooOId4oIb1_xd4q395Tr5hKuLPYYPhLI9pJ67FcaW-TABMO3XLwNkFl4_8vSCQLViF0hXCEenqdVjpTjW6T_08xBnkCm_08lFgIGvMLns3Nxxzp96DlQ0--gpPNi6aFBtO_zuRYI7Q6npLNnXroyzcg2sPyIpC5ko6j6n5DDFr9Yl7p2U1Fw9ivSwtSPpLt0EReeBZFhqmBh-BgESG_si9B9U8jeh1i_sID-OvYZ_kUdRqRSYHJzLpEc4yQLhGFtaiIP6V7qxeoQcK0vXm2JzvJP7iMMjn_6TRCKOgFjIesyBQnTfdCjXT_xSGHJLDjW67B-dSW4tO8-26LZcoo-ezN11j19Nu0sMwQ6cAqR6OpOLe5iN9krJnRzwlzqszqi2Au1EOp1cuI1expdSEMy7Kv0TQtmRNGyQoGl-XAEDJ-e0XezbOh5KNF5n3HfTsBsOC9we0J7C9mjfGOFn3sQ83bOh9VG17dpkKtpaIgsbfZdMJDIymBlm2pnWxcrvxTiylViZp6oTdsOVBMINbQKANx_fU9nvmo6GkyETojnvJQCISzdT5RpNMKc381TdtXltzw8BNV6tMhVAW30poPMnEYmAbSmP787WZAXqTbajgi_wo_JbiIW6wuTppRBmfzU8tSu3_9UJMapER5YY13VrQq3DIA4ECxaKVntp_N_UfoiuEAtT8oH-5XTxmb0bTSPeQl4BjE37UjWgo4a94zusTqpwBvJThMq5oTpjUiFnEeSBcIa1f-vB-YCVtrEqKjuTV3vHa-V6OMElmmRSbkCA_tJ5NRXkcws0oX8z5TxT1RQSOCrn_v9L6vjcX8v1sL5piHyL97vTsvwAl6vWyJ4iwx2TKazO_M4HN_DHSNJ4OXRbhPPPGtj8LwzCMT7BtPWLw; _ga_GZ44FZWHSB=GS1.1.1691158291.36.1.1691158341.10.0.0",
      "Referer": "https://umass.collegescheduler.com/terms/Fall%202023/courses/add",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }).then(response => response.json()).catch(err => {});
}

async function fetch_subjects() {
  return fetch("https://umass.collegescheduler.com/api/terms/Fall%202023/subjects", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Microsoft Edge\";v=\"115\", \"Chromium\";v=\"115\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "_ga=GA1.1.32966608.1686714406; ph_foZTeM1AW8dh5WkaofxTYiInBhS4XzTzRqLs50kVziw_posthog=%7B%22distinct_id%22%3A%2218953858d8621ce-0cc9769a852e13-7e565470-144000-18953858d872989%22%2C%22%24device_id%22%3A%2218953858d8621ce-0cc9769a852e13-7e565470-144000-18953858d872989%22%2C%22%24user_state%22%3A%22anonymous%22%2C%22extension_version%22%3A%221.5.5%22%2C%22%24session_recording_enabled_server_side%22%3Afalse%2C%22%24autocapture_disabled_server_side%22%3Afalse%2C%22%24active_feature_flags%22%3A%5B%5D%2C%22%24enabled_feature_flags%22%3A%7B%22enable-session-recording%22%3Afalse%2C%22sourcing%22%3Afalse%2C%22only-company-edit%22%3Afalse%2C%22job-lists%22%3Afalse%7D%2C%22%24feature_flag_payloads%22%3A%7B%7D%7D; __RequestVerificationToken=oc5gXs4MLkEFNA_K8xfgnF9e4amxEgEX1MJxJt6i3YQlct32RU46ibVnSgyNPQjcPfoMOFUf2qAwauQLZ7kquMDNcz41; .AspNet.Cookies=ftbMmMwUU5cmHu3GD2poQ5yuooXNQMQJH6k01eIXuiKRKP5Vyxd4w01AekvSe0l1pULiGIkugSGFa-fuzi36l-IMPVHS2cYiyLMRNJSNxsFALe6McS509wCNkK4PU97B03fSx8P55C-xbmPwZXsxd8XEmF7PA-ZRbOlJrXaoLMVfmxEyCUmaSZVPenlztfsKCyWpBTgSNPu9sGvWAehIM8xNE_zzhliVWp6zrrx6_rO12zpX5ncTxDvjLx0gsTsutn1zMbKFIEDLfTHAZQpstZOzqVdS-W9srdDNZ_TMkKHuzijgZ3u40f2dbLLxeQE0dWxBthVeOzOWyBGQYhSvsAc3BBpMN3hYw2WaaoMK3dJyr9Ap3U_vDT5TIbdJf6Ud5b3YJ17875Jw7-sct4lHU8ueU8mJpB8SmCqJ3jPdUbGQFlP6E99OBDwCoLXQ-zM8jVNgHyjzoDzWqJckhDftvF2s7LUAUOQW1cOg824nL8KzhNwKYePNYbJXV7zpYiW5VMRgRVjBsTdn4PhYqpGxt4WrpNR6RDPm6h3hP_QAsNYgXliF2lCato-a8RaV-TFyrDCMN_CeOOYoRZM8w0aUPkzDjaQITSQzBKc9SsT-iwNlz99Fn4jXQwYepP1B8E60hsSo94qa_18vAS4FcdiFEh1mAVlMUxbgcpL5vn_gTycxv1pshYTlNbWRWuQYBQdT7Px439ui7B81XHaVIrxpLI7JxLxdfBl1CIe1wMtWNGy92n6yLy4rjxN1bxFMWYfLAtp1sJnhQfBUFJs5og8f4nYXNO6yHziy0n7JVBRwPFv4Sf0GiWW5fFZZFEcaEGFLzZFDrEX1WM8-4IH2eeIA-KZYZJ9ZIjfAyEi1WRUNPKvT7XtycNNoN3X3cpeGJQ4v2ZE3RbUkjzbjHkux1PpVpamkqPDxmHMfx-hhOrLpvJOAsUSKTKtfX1dl1GH8If4sb8r3B0i5-ZkyfDV9AkSPG-0WtvvbgCDDs6koi8GkScGLH3mL5NK4CFf3GUFqB7sM9buaeMTMULiVgBywWc42SxxuLbyHFlE7vITjqF5MkzjqVC6rYoEEYVgCvJ2758IcDS-6gx7onO2Q-RBID3aa58FDFXSYJSWAMLjBXWQAo8vW8YYfJ7VHenTRW5_AYi_fl8BywCpAUd3S-Kko6iyDR7kWjNpuMnVJQIPrF3shWq7Eoux_t_5gri6rcv2bRoC5FtqpfDUucXJyABssYOuLQGCc5MR6IyqJnaKeRxKimJJrAnhrSumAliU2nNWK6TjIFVxhwbzvsYjl5ai11aPn39NW16g5siUekxABLQ4vCcX1YXJA_VOtyyRoPeA1ZBvDOGtL1ThI_d3AGj3BKcimm2mkh35Jp1EdVAXqmJnnKsZM0aG91tah0rVMuoNPnRVfdb6czQo_goYD_GUhwIPeg9Yvverh0OTAvzLFYBLZu6qUGpM87xdTeEgZdADaE9RXH03sjpBJ_a6GlwVvxkdgRDDJQfZQpQLrscvtPEvMHn3-Shzj8OUM5WCYlW8R0nS21Z5BTwwNVuaD-s8CM1VK8-KsoBwTGhiMytQSyJ3zb8ZkfX7vjj6lGpSXt2Q9MIUfKUF-qOC0EEGSs5koSEZOF-6n8keGxr_1tHvlLMAnVLhU4Coo34tWTiNZexv0cPvzktK-4Bz6xY6cWOwvLRVsiw5k5D31L4a28Q2Buz7dUEkQlRU38JV_G8a90K_HjuwFEbbAvIcKq9ZTHDBLd9TwjA310JKk8-JdwXoVFuIjL7Ze4PonJn804Qvr9D7r96fKq77H_xXDKt-1KcChpYj_3kyvUvjjzFc6WIl9YEFm3ku_Zm4ujuoaO7VKeXvJg6bf0-u3asznxMo5OGdmulxpMnRXpDa-CnY0kgooZeXfWVy0_CYC; _ga_GZ44FZWHSB=GS1.1.1690988638.32.1.1690988889.60.0.0",
      "Referer": "https://umass.collegescheduler.com/terms/Fall%202023/courses/add",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }).then(response => response.json());
}

// fetch_subjects()
// .then(data => writeToJSONFile('subjects.json', data));