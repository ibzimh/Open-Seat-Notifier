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
      "cookie": "_ga=GA1.1.32966608.1686714406; ph_foZTeM1AW8dh5WkaofxTYiInBhS4XzTzRqLs50kVziw_posthog=%7B%22distinct_id%22%3A%2218953858d8621ce-0cc9769a852e13-7e565470-144000-18953858d872989%22%2C%22%24device_id%22%3A%2218953858d8621ce-0cc9769a852e13-7e565470-144000-18953858d872989%22%2C%22%24user_state%22%3A%22anonymous%22%2C%22extension_version%22%3A%221.5.5%22%2C%22%24session_recording_enabled_server_side%22%3Afalse%2C%22%24autocapture_disabled_server_side%22%3Afalse%2C%22%24active_feature_flags%22%3A%5B%5D%2C%22%24enabled_feature_flags%22%3A%7B%22enable-session-recording%22%3Afalse%2C%22sourcing%22%3Afalse%2C%22only-company-edit%22%3Afalse%2C%22job-lists%22%3Afalse%7D%2C%22%24feature_flag_payloads%22%3A%7B%7D%7D; .AspNet.Cookies=gGZZaPmhpq9aoOJ9Iej7nN-HPTKpQVzM3aXVz2681PcfQ_BkmEGQau51V9db6YxWVQNUldpaoyOTNEelPNvU-1hYXykwtO-NRTjDM_cmbYmg7B5AfQy-qd98o5r3fgNKhllSMG8JmCr5HR4TQ3A0GI570Z_1esf_q6K81KRq9hBwKIc_qqeqp16NUcqMlXVy7iMQJmVzye9BbKm-ct5swO9MQbpZ2pjJN9g-aOE4k3cSv7a08e7pLCe0MZqJ0jRhvGp2pTBBJUAa8FazkxeCCXcMjclh0RqgT_5Lb_FWDvYvKfUMqTLzZ69dpEnVh0QnVjR2aN4KVk3lxpk22EK0XQl39OdrQyEubZaRr4ysdQ9Buq1-WzzFFI8UIrp26YlO8aeCq2rwDsuxjlk7QHYtSdPlvbtNhyOByfL88ZrA1iSuruhqYEWh5jIr54cbmSHl-Y6EsUym5F-rUgVca6xdqqjVjJCStR43yvmd-uCVK9jbllSu7EKfK4Mxi3MAr85SgB74y1Wr1z3UOMs_uoPa2rTyOTj7j9bLiM1HhDxqamb6-yetD1nHHRvIUhJqdqM_N_Xk4uf5SQ4ppXWMZE1Vu6iVTk5JXm7DLcd0bJoIhhQFcBYC1KbWAEcvjejeWhOda2Q0Rp8cNVZPghcMbyGzs4kC21_NNPtXO7ZNc7ZpCvzhkgsV6en5QIAMP-59947v45dP2-pOFrDXq-SQTdBZUc73Ohy4_HjpEA34Yk3xUShhpXcKbKfz7cdrRMut2F0I8YHoJCUbl5683AjjnPNtEmzE9XcjaMmHYrTsdOnO6etv3S_Ln57IXnuRnt6PbgQF4iGubMm-ZtuxlRvb0rilQO7maj576cSpLbW1WZV9tW9zWXb_rqNnoVWYZihaDl4ck8jwl94mQerJ104DJ_6ICluKnT64K6TDkW1m0dPt6NFOFXH-Z37ztgiwYFIv6xp90PQpbR8Y-imEgYTudY1AbGTtv4-PT5793F1bbJ8Dz-g3E-FxsA8udBbVfKZFHhOYeGfCYNTeXKmTXKTH8ybv3cep3vuXFpO4gVqmkgkp6uPaWm0fFk5c8qvllLCmnwFAfhfGYVa_ySVEXwIxLgvhREa_ku8xmLTjppqC9ORwKbbPypjd02DRyrEO4CaB1ZjweWALv7seZ_vwdBzwGVs0KSVAwKVyZzJpUo0qiMsqKn3WY6bsSgunyryhI-VOKkkGRcmD8cUpiZhxC5XjwYiL_FSj5t5Zqje-Ydfo1v-dhdGdK9L2hfkb4GUnZCnVeEEP0n-zzBBNOAoafcypz-4koKvKMQM82kIwgxuMYH1RorN8h-rU6A-Q3xIjJ53mmJ8pAeWWRyuZpRtL_TLm8e1WjRBt4bYSL0R9O1h5JJcIxyay2qN92XJy1G0Lr28jYEZ9Dx7BjX1kIVWDPbEwD0XQEaVg1tRKOV-L0NygpANZPtdUDGmHe5HRRhB5het-Eu-T94nzOlgZ0qA2yf9nPkJ1MxEm8txLDYhQuBFRrnCnGjmA8z7PDlVtXRugMSrhW4cbjoLTxvfxhZiPv1EXFESW95CU7KX44yAL-1jAowt5pO0BDxOFSWm43g0Xne4Yt7kbpxPMkaBxMbVRObOnpPy_YRLT262H5p5f03O0dknw5ysIvprCE5H_nItzZRXVNfHXKgYeLtzjF0auJdhpgGbcD9arp5pH5jWk0jD6XKBHHVDKRr4ls8hBAVMQPJozMPCg5VFQniEtLiyetj-iyhjRIfRnHcY58dORNU_4d_TebMNlk6DvsbZtRx2ughZNfaIxbstGhZzknWrXXn7axAoLKg757e9gkJQVqUj0RUAz1Wxh5ly5F8Y0ufE6o8Hgd5XwpiTLl6SdUxL-f0yxmAOxWcIluBFBjP_qCVRjaXq7n4eM8H5w; __RequestVerificationToken=AH9c4M5FxMMD9aCHnS4b5akpbhS5edBDHOekR2ZQawlvvqvWCCgywXj3qNDPvuMEfsdWlL1LEgOfLCkUpY4-S9ZA0Hg1; _ga_GZ44FZWHSB=GS1.1.1691148262.34.1.1691148520.41.0.0",
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

export async function store_open_courses() {
  return readFromJSONFile("subjects.json").then((courses) =>
    Promise.all(courses.map((course) => fetch_course_data(course.id))).then(
      (values) => writeToJSONFile("data.json", values)
    )
  );
}

// fetch_subjects()
// .then(data => writeToJSONFile('subjects.json', data));