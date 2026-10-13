const CONFIG = {
    appName: "kiều đức",
    spreadsheetId: "1_ts4WHe5OdZzsLwenoNCwFhQ9bOG6bI3dsxQLSidAFU",
    serviceAccountEmail: "kieuduc123@kieuducwml123.iam.gserviceaccount.com",
    privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQu0DqH8iQlilt\nwoGRPxJsieyf1tfp71AluBTZknJ/0+3jMjWzeRgdt6XffU1Zi1baWr4IdsLKl1jZ\nmEkvps+6tYjMrwfg3U3e4X6jrPERCHLncptUKNrAH1+GZawwpvD+bqzMj8EdvDc5\n29CDz+RCCaGHOAqlobDJ9gBYy32/if82OlhPdbiGR+sN1DLlGoegzzhxP8pgHbMr\n7xgT4OAoXQWMa36hgkzNsa8KcmFdH1yoFAlU81wbdCR34Ge7J7s5V2wdT4oyRwvI\nmBKgYWAhkphH3WhwhW+TjDcveW4sDcYnDeo42c43rr01e3gX4v71rEZ1ovCBOcc8\nEYr7hSTDAgMBAAECggEAQMyZGvXSBHzxkJcNNUOw2ww4bui6L/Aw3/zVUDQkIqXu\n2JT6UeS6hWNBde/G5xEYXgJEs4j28QDqPucFdWsiWxLHTM/bsMXTSmmTsIlcb07B\nqTONoCNswa8brzP6MEJrV3mRYJISQEJxnJ8ujPUppgyqXjmaKJBZO2GI+wf1WlQT\nw2Bp5WAMwnqcrH2nh0qc56YZyDJBMjYgQAJBzcQY9Ohh2osNEftBrSeDkWdZVd9+\n9SRAl1oRFdF141FjxSkP69777thBwdhgrdCHNBb4cbo8B4I2W01iwruo1UbferAY\nVb1eQIFI7RivClwKEVfG4xOMdd6Am7TQs6nrLLReXQKBgQDxViQPGeg924NHk3ad\noLEZC0c1/HY/KJcEabzIGpP6TTzg3Touahib22o4IJ+uT7YHHCUQlAZpx/9NQpsL\nZYGg+dRLNsr6yzU79fBNPdp6BDr1EXAtUp9A7dDQlu1dHMr44W2NnykF2O4DRmcf\nRX3Peo/GFbGkYLispEFQc4U+7wKBgQDdafWEcdFflSPjID6d8ZKBaSVecBS2vZvg\n6uUdLwkoDZpS3RHzH5iagz9iN0oBRQDwLEI/Nw4/UHYO/vkvLl/PATkbesBe1RWK\n0TmAvSN7qby0TzFLlLuYcm1mchkqQwmdDRVzFLEPdQxCFXFj4itnMts6hFtwP8RP\nE1EVSPw3bQKBgAc10aH53ixq8IMk7rhK4r+izJ/aSRYd+lURa6h20tD5mcYGFgTo\n+o89gPDoWJz2mLOhraHPKlnitcfzI3q1r6fFjwgoPOw9QfvmnyVPocVfdvt3Z+iS\nvVtNP53bxH+xqobBBWrjxG/+SS4j3lTa2KVoPf9nCoWkth/CUIk8ylBVAoGBAK1g\nKUZ6sY59BEr3ltCqtyPqp75ZWX723jay+JFvoWXhsPQt875DAYYMO/e2f5aa5+8p\nWP6TJ+7gHHIFqi4NzCwWMxeXeUdI58N5reNnN3/AG+m9EUazwmnPQGc19Qqoz8BQ\n3HjuvO7zopOkotOp6H64zf32Ynt1E00wPQ/DxOvJAoGAO/1jGvrVbTViCZTPhKzA\nKb5sBFcILEhNsh9tN52QFzLRmNt6NJc0qVEJqrIKns1ka4i/UtmeWZwygEBD92hk\nBLtpn5jGPNDbYe57bCPbn/rr3WIe7KGZU6o7JwIOskc30KOrOhycTu/Saunw5xdv\njWGRDHx//vnfM3DTa5v6Vxw=
-----END PRIVATE KEY-----`,
    tokenUrl: "https://oauth2.googleapis.com/token",
    modules: {
        NPP: {
            label: "NPP",
            icon: "building-2",
            headers: ["id", "ten", "sdt", "dia_chi", "ngay_sinh", "hoa_hong"],
            numericHeaders: ["hoa_hong"]
        },
        DON_HANG: {
            label: "Đơn hàng",
            icon: "shopping-cart",
            headers: ["id", "ngay", "mdh", "npp", "id_sp", "ten", "don_gia", "slg", "thanh_tien", "chiet_khau", "tien_chiet_khau", "tien_hang"],
            numericHeaders: ["don_gia", "slg", "thanh_tien", "chiet_khau", "tien_chiet_khau", "tien_hang"]
        },
        CONG_NO: {
            label: "Công nợ",
            icon: "wallet",
            headers: ["id", "ngay", "npp", "truong", "so_tien", "cong_no_con_lai"],
            numericHeaders: ["so_tien", "cong_no_con_lai"],
            statusOptions: ["THU", "CHI"]
        },
        CONG_VIEC: {
            label: "Công việc",
            icon: "clipboard-list",
            headers: ["id", "ngay", "cong_viec", "noi_dung", "ghi_chu", "anh", "link", "tinh_trang", "trang_thai"],
            textareaHeaders: ["noi_dung", "ghi_chu"],
            statusOptions: ["chưa làm", "đang làm", "hoàn thành", "hủy"]
        },
        DS_SP: {
            label: "DS SP",
            icon: "package",
            headers: ["id", "ten_sp", "gia_ban", "gia_km", "thuong_hieu"],
            numericHeaders: ["gia_ban", "gia_km"]
        },
        BAO_HANH: {
            label: "Bảo hành",
            icon: "shield-check",
            headers: ["id", "ten_khach", "sdt", "dia_chi", "sp_can", "tinh_trang", "huong_xly", "ghi_chu"],
            textareaHeaders: ["huong_xly", "ghi_chu"]
        },
        BAO_CAO: {
            label: "Dashboard",
            icon: "layout-dashboard",
            headers: [],
            reportOnly: true
        },
        DSNV: {
            label: "DSNV",
            icon: "users",
            headers: ["id", "ho_ten", "hinh_anh", "gioi_tinh", "ngay_sinh", "quyen", "mk"],
            hidden: true
        }
    }
};

const MODULE_STORAGE_KEY = "kieuDucActiveModule";
const AUTH_STORAGE_KEY = "kieuDucCurrentUser";
const COLUMN_CONFIG_STORAGE_KEY = "kieuDucColumnConfig_v1";
const MODULE_ORDER = ["BAO_CAO", "DON_HANG", "CONG_NO", "CONG_VIEC", "NPP", "DS_SP", "BAO_HANH"];
const DEFAULT_MODULE_CONFIGS = JSON.parse(JSON.stringify(CONFIG.modules));

let accessToken = null;
let tokenExpiry = 0;
let spreadsheetSheets = new Map();
let currentModule = "BAO_CAO";
let allData = [];
let filteredData = [];
let currentPage = 1;
let rowsPerPage = 150;
let dsSpOptions = [];
let nppOptions = [];
let currentDonHangMdh = "";
let congViecView = "table";
let reportData = null;
let reportSkuPage = 1;
let currentUser = null;
let moduleLoadSeq = 0;
let selectedSheetRows = new Set();
let columnConfigEditingModule = "DS_SP";
let customColumnConfigs = loadStoredColumnConfigs();
let moduleSortState = {};

function loadStoredColumnConfigs() {
    try {
        const raw = localStorage.getItem(COLUMN_CONFIG_STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : {};
        if (parsed && typeof parsed === "object") {
            if (parsed.DS_SP && Array.isArray(parsed.DS_SP.headers) && !parsed.DS_SP.headers.includes("thuong_hieu") && !parsed.DS_SP.removedDefaultHeaders?.includes("thuong_hieu")) {
                parsed.DS_SP.headers.push("thuong_hieu");
            }
            return parsed;
        }
    } catch (_) { }
    return {};
}

function saveStoredColumnConfigs() {
    try {
        localStorage.setItem(COLUMN_CONFIG_STORAGE_KEY, JSON.stringify(customColumnConfigs));
    } catch (_) { }
}

function getModuleConfig(moduleName = currentModule) {
    return CONFIG.modules[moduleName] || CONFIG.modules.NPP;
}

function getDefaultModuleConfig(moduleName = currentModule) {
    return DEFAULT_MODULE_CONFIGS[moduleName] || DEFAULT_MODULE_CONFIGS.NPP;
}

function getModuleColumnConfig(moduleName = currentModule) {
    const def = getDefaultModuleConfig(moduleName);
    const saved = customColumnConfigs[moduleName] || {};
    const headers = Array.isArray(saved.headers) && saved.headers.length ? [...saved.headers] : [...(def.headers || [])];
    const defaultHidden = moduleName === "DON_HANG"
        ? headers.filter(h => !["ngay", "mdh", "npp"].includes(h))
        : ["id"];
    const hiddenHeaders = Array.isArray(saved.hiddenHeaders) ? [...saved.hiddenHeaders] : defaultHidden;
    const labels = saved.labels && typeof saved.labels === "object" ? { ...saved.labels } : {};
    const types = saved.types && typeof saved.types === "object" ? { ...saved.types } : {};
    const widths = saved.widths && typeof saved.widths === "object" ? { ...saved.widths } : {};
    const aligns = saved.aligns && typeof saved.aligns === "object" ? { ...saved.aligns } : {};
    return { headers, hiddenHeaders, labels, types, widths, aligns };
}

function getColumnWidth(header, moduleName = currentModule) {
    const colCfg = getModuleColumnConfig(moduleName);
    const w = Number(colCfg.widths[header]);
    return Number.isFinite(w) && w >= 40 ? Math.round(w) : null;
}

function getColumnAlign(header, moduleName = currentModule) {
    const colCfg = getModuleColumnConfig(moduleName);
    const align = colCfg.aligns[header];
    if (["left", "center", "right"].includes(align)) return align;
    return "left";
}

function getCellStyleAttr(header, moduleName = currentModule) {
    const styles = [];
    const width = getColumnWidth(header, moduleName);
    if (width) {
        styles.push(`width:${width}px`, `min-width:${width}px`, `max-width:${width}px`);
    }
    const align = getColumnAlign(header, moduleName);
    if (align && align !== "left") {
        styles.push(`text-align:${align}`);
    }
    return styles.length ? ` style="${styles.join(";")}"` : "";
}

function getHeaders(moduleName = currentModule) {
    const def = getModuleConfig(moduleName);
    if (def.reportOnly || def.hidden) return def.headers || [];
    return getModuleColumnConfig(moduleName).headers;
}

function getHeaderLabel(header, moduleName = currentModule) {
    const colCfg = getModuleColumnConfig(moduleName);
    if (colCfg.labels[header]) return colCfg.labels[header];
    return String(header || "").toUpperCase();
}

function getColumnType(header, moduleName = currentModule) {
    const colCfg = getModuleColumnConfig(moduleName);
    if (colCfg.types[header]) return colCfg.types[header];
    const def = getDefaultModuleConfig(moduleName);
    if ((def.numericHeaders || []).includes(header)) return "number";
    if ((def.textareaHeaders || []).includes(header)) return "textarea";
    if (String(header || "").includes("ngay")) return "date";
    return "text";
}

function getVisibleTableHeaders(moduleName = currentModule) {
    const colCfg = getModuleColumnConfig(moduleName);
    const hiddenSet = new Set(colCfg.hiddenHeaders);
    if (moduleName === "DON_HANG") {
        const displayChoices = [...colCfg.headers];
        if (!displayChoices.includes("tong_tien")) displayChoices.push("tong_tien");
        const visible = displayChoices.filter(h => !hiddenSet.has(h));
        return visible.length ? visible : ["ngay", "mdh", "npp", "tong_tien"];
    }
    const visible = colCfg.headers.filter(h => !hiddenSet.has(h));
    return visible.length ? visible : colCfg.headers;
}

async function getAccessToken() {
    if (accessToken && Date.now() < tokenExpiry - 300000) return accessToken;
    const header = { alg: "RS256", typ: "JWT" };
    const now = Math.floor(Date.now() / 1000);
    const payload = {
        iss: CONFIG.serviceAccountEmail,
        scope: "https://www.googleapis.com/auth/spreadsheets",
        aud: CONFIG.tokenUrl,
        exp: now + 3600,
        iat: now
    };
    const jwt = KJUR.jws.JWS.sign("RS256", JSON.stringify(header), JSON.stringify(payload), CONFIG.privateKey);
    const res = await fetch(CONFIG.tokenUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error_description || data.error || "Không lấy được quyền truy cập Google Sheets.");
    accessToken = data.access_token;
    tokenExpiry = Date.now() + (data.expires_in * 1000);
    return accessToken;
}

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function escapeJsString(value) {
    return String(value ?? "")
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/\r/g, "\\r")
        .replace(/\n/g, "\\n");
}

function safeCreateIcons() {
    try {
        if (typeof lucide !== "undefined" && lucide && typeof lucide.createIcons === "function") {
            lucide.createIcons();
        }
    } catch (_) { }
}

function colName(index) {
    let name = "";
    let num = index + 1;
    while (num > 0) {
        const rem = (num - 1) % 26;
        name = String.fromCharCode(65 + rem) + name;
        num = Math.floor((num - 1) / 26);
    }
    return name;
}

function quoteSheetName(name) {
    return `'${String(name).replace(/'/g, "''")}'`;
}

function showLoading(_message = "Đang tải dữ liệu...") {
    document.body.classList.add("is-busy");
}

function hideLoading() {
    document.body.classList.remove("is-busy");
}

function parseMoney(value) {
    if (typeof value === "number") return Number.isFinite(value) ? value : 0;
    const raw = String(value ?? "").trim();
    if (!raw) return 0;
    const normalized = raw.replace(/\s/g, "").replace(/[^\d,.-]/g, "");
    if (!normalized) return 0;
    if (normalized.includes(",") && normalized.includes(".")) {
        return Number(normalized.lastIndexOf(",") > normalized.lastIndexOf(".")
            ? normalized.replace(/\./g, "").replace(",", ".")
            : normalized.replace(/,/g, "")) || 0;
    }
    if (/^-?\d{1,3}([.,]\d{3})+$/.test(normalized)) return Number(normalized.replace(/[.,]/g, "")) || 0;
    return Number(normalized.replace(",", ".")) || 0;
}

function formatDisplayNumber(value) {
    const raw = String(value ?? "").trim();
    if (!raw) return "";
    return new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 2 }).format(parseMoney(raw));
}

function clampCommissionPercent(value) {
    const number = parseMoney(value);
    if (!number) return "";
    return String(Math.min(Math.max(number, 0.001), 100));
}

function isNumericHeader(header, moduleName = currentModule) {
    return getColumnType(header, moduleName) === "number";
}

function isTextareaHeader(header, moduleName = currentModule) {
    return getColumnType(header, moduleName) === "textarea";
}

function normalizeRow(row) {
    return getHeaders().map((header, index) => {
        const value = String(row?.[index] ?? "").trim();
        return isNumericHeader(header) && value ? parseMoney(value) : value;
    });
}

function getRowId(row) {
    return String(row?.[0] || "").trim();
}

function generateNextId(extraIds = []) {
    const ids = [...allData.map(getRowId), ...extraIds].filter(Boolean);
    const numericIds = ids.map(id => Number(id)).filter(Number.isFinite);
    if (numericIds.length === ids.length && numericIds.length) return String(Math.max(...numericIds) + 1);
    const now = new Date();
    const stamp = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0"),
        String(now.getHours()).padStart(2, "0"),
        String(now.getMinutes()).padStart(2, "0"),
        String(now.getSeconds()).padStart(2, "0")
    ].join("");
    let candidate = `${currentModule}-${stamp}`;
    let suffix = 1;
    while (ids.includes(candidate)) {
        suffix += 1;
        candidate = `${currentModule}-${stamp}-${suffix}`;
    }
    return candidate;
}

function randomCode(length = 10) {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let value = "";
    for (let index = 0; index < length; index += 1) {
        value += chars[Math.floor(Math.random() * chars.length)];
    }
    return value;
}

function getHeaderIndex(header, moduleName = currentModule) {
    return getHeaders(moduleName).indexOf(header);
}

async function sheetsFetch(path, options = {}) {
    const token = await getAccessToken();
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}${path}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${token}`,
            ...(options.body ? { "Content-Type": "application/json" } : {}),
            ...(options.headers || {})
        }
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error?.message || "Lỗi Google Sheets API.");
    return data;
}

async function loadSpreadsheetSheets() {
    const data = await sheetsFetch("?fields=sheets.properties");
    spreadsheetSheets = new Map((data.sheets || []).map(sheet => [
        sheet.properties.title,
        {
            sheetId: sheet.properties.sheetId,
            title: sheet.properties.title
        }
    ]));
}

async function batchUpdate(requests) {
    return sheetsFetch(":batchUpdate", {
        method: "POST",
        body: JSON.stringify({ requests })
    });
}

async function ensureModuleSheet(moduleName = currentModule) {
    if (!spreadsheetSheets.size) await loadSpreadsheetSheets();
    if (!spreadsheetSheets.has(moduleName)) {
        await batchUpdate([{ addSheet: { properties: { title: moduleName } } }]);
        await loadSpreadsheetSheets();
    }
    await ensureModuleHeaders(moduleName);
}

async function ensureModuleHeaders(moduleName = currentModule) {
    let expectedHeaders = [...getHeaders(moduleName)];
    if (!expectedHeaders.length) return;
    const headerRowRange = `${quoteSheetName(moduleName)}!1:1`;
    const data = await sheetsFetch(`/values/${encodeURIComponent(headerRowRange)}`);
    const rawCurrentHeaders = (data.values?.[0] || []).map(h => String(h || "").trim());
    const currentHeaders = rawCurrentHeaders.filter((h, idx) => h || idx < expectedHeaders.length);

    const removedSet = new Set(customColumnConfigs[moduleName]?.removedDefaultHeaders || []);
    let adoptedExtra = false;
    rawCurrentHeaders.forEach(sheetHeader => {
        if (sheetHeader && !expectedHeaders.includes(sheetHeader) && !removedSet.has(sheetHeader)) {
            expectedHeaders.push(sheetHeader);
            adoptedExtra = true;
        }
    });
    if (adoptedExtra && !getModuleConfig(moduleName).hidden) {
        const colCfg = getModuleColumnConfig(moduleName);
        customColumnConfigs[moduleName] = {
            ...customColumnConfigs[moduleName],
            ...colCfg,
            headers: expectedHeaders
        };
        saveStoredColumnConfigs();
    }

    const needsHeader = currentHeaders.length !== expectedHeaders.length || expectedHeaders.some((header, index) => String(currentHeaders[index] || "").trim() !== header);
    if (!needsHeader) return;
    if (currentHeaders.some(header => String(header || "").trim())) {
        const currentEndCol = colName(Math.max(rawCurrentHeaders.length, expectedHeaders.length) - 1);
        const oldDataRange = `${quoteSheetName(moduleName)}!A2:${currentEndCol}`;
        const oldData = await sheetsFetch(`/values/${encodeURIComponent(oldDataRange)}`);
        const oldHeaders = rawCurrentHeaders;
        const remappedRows = (oldData.values || []).map(row => expectedHeaders.map(header => {
            const oldIndex = oldHeaders.indexOf(header);
            return oldIndex >= 0 ? row[oldIndex] ?? "" : "";
        }));
        await sheetsFetch(`/values/${encodeURIComponent(`${quoteSheetName(moduleName)}!A1:${currentEndCol}`)}:clear`, {
            method: "POST",
            body: JSON.stringify({})
        });
        await sheetsFetch(`/values/${encodeURIComponent(`${quoteSheetName(moduleName)}!A1`)}?valueInputOption=RAW`, {
            method: "PUT",
            body: JSON.stringify({ values: [expectedHeaders, ...remappedRows] })
        });
        return;
    }
    const range = `${quoteSheetName(moduleName)}!A1:${colName(expectedHeaders.length - 1)}1`;
    await sheetsFetch(`/values/${encodeURIComponent(range)}?valueInputOption=RAW`, {
        method: "PUT",
        body: JSON.stringify({ values: [expectedHeaders] })
    });
}

async function syncModuleHeadersToSheet(moduleName, newHeaders, renameMap = new Map()) {
    if (!spreadsheetSheets.size) await loadSpreadsheetSheets();
    if (!spreadsheetSheets.has(moduleName)) {
        await batchUpdate([{ addSheet: { properties: { title: moduleName } } }]);
        await loadSpreadsheetSheets();
    }
    const headerRowRange = `${quoteSheetName(moduleName)}!1:1`;
    const data = await sheetsFetch(`/values/${encodeURIComponent(headerRowRange)}`);
    const rawCurrentHeaders = (data.values?.[0] || []).map(h => String(h || "").trim());
    const isSame = rawCurrentHeaders.length === newHeaders.length && newHeaders.every((h, idx) => rawCurrentHeaders[idx] === h);
    if (isSame && !renameMap.size) return;

    const maxCols = Math.max(rawCurrentHeaders.length, newHeaders.length, 1);
    const currentEndCol = colName(maxCols - 1);
    if (rawCurrentHeaders.some(Boolean)) {
        const oldDataRange = `${quoteSheetName(moduleName)}!A2:${currentEndCol}`;
        const oldData = await sheetsFetch(`/values/${encodeURIComponent(oldDataRange)}`);
        const remappedRows = (oldData.values || []).map(row => newHeaders.map(header => {
            const sourceHeader = renameMap.get(header) || header;
            const oldIndex = rawCurrentHeaders.indexOf(sourceHeader);
            return oldIndex >= 0 ? row[oldIndex] ?? "" : "";
        }));
        await sheetsFetch(`/values/${encodeURIComponent(`${quoteSheetName(moduleName)}!A1:${currentEndCol}`)}:clear`, {
            method: "POST",
            body: JSON.stringify({})
        });
        await sheetsFetch(`/values/${encodeURIComponent(`${quoteSheetName(moduleName)}!A1`)}?valueInputOption=RAW`, {
            method: "PUT",
            body: JSON.stringify({ values: [newHeaders, ...remappedRows] })
        });
    } else {
        const range = `${quoteSheetName(moduleName)}!A1:${colName(newHeaders.length - 1)}1`;
        await sheetsFetch(`/values/${encodeURIComponent(range)}?valueInputOption=RAW`, {
            method: "PUT",
            body: JSON.stringify({ values: [newHeaders] })
        });
    }
}

async function loadDsSpOptions() {
    await ensureModuleSheet("DS_SP");
    const headers = getHeaders("DS_SP");
    const idIndex = headers.indexOf("id");
    const tenIndex = headers.indexOf("ten_sp") >= 0 ? headers.indexOf("ten_sp") : headers.indexOf("ten");
    const giaIndex = headers.indexOf("gia_ban") >= 0 ? headers.indexOf("gia_ban") : headers.indexOf("don_gia");
    const thuongHieuIndex = headers.findIndex(h => slugifyColumnKey(h) === "thuong_hieu" || slugifyColumnKey(h) === "thuonghieu");
    const range = `${quoteSheetName("DS_SP")}!A2:${colName(headers.length - 1)}`;
    const data = await sheetsFetch(`/values/${encodeURIComponent(range)}`);
    dsSpOptions = (data.values || [])
        .map(row => ({
            id: String(row[idIndex] || "").trim(),
            ten: String(row[tenIndex] || "").trim(),
            gia: String(row[giaIndex] || "").trim(),
            thuongHieu: thuongHieuIndex >= 0 ? String(row[thuongHieuIndex] || "").trim() : ""
        }))
        .filter(item => item.id);
    return dsSpOptions;
}

function getDsSpBrandOptions() {
    const brands = new Set();
    const thuongHieuIndex = getHeaderIndex("thuong_hieu", "DS_SP");
    if (currentModule === "DS_SP" && thuongHieuIndex >= 0) {
        allData.forEach(row => {
            const val = String(row[thuongHieuIndex] || "").trim();
            if (val) brands.add(val);
        });
    }
    dsSpOptions.forEach(item => {
        if (item.thuongHieu) brands.add(item.thuongHieu);
    });
    if (reportData?.allBrandRows) {
        reportData.allBrandRows.forEach(item => {
            if (item.brand && item.brand !== "Chưa phân loại") brands.add(item.brand);
        });
    }
    return [...brands].sort((a, b) => a.localeCompare(b, "vi"));
}

function getDsSpById(idSp) {
    const key = String(idSp || "").trim().toLowerCase();
    return dsSpOptions.find(item => item.id.toLowerCase() === key) || null;
}

async function loadNppOptions() {
    await ensureModuleSheet("NPP");
    const headers = getHeaders("NPP");
    const idIndex = headers.indexOf("id");
    const tenIndex = headers.indexOf("ten");
    const hoaHongIndex = headers.indexOf("hoa_hong");
    const range = `${quoteSheetName("NPP")}!A2:${colName(headers.length - 1)}`;
    const data = await sheetsFetch(`/values/${encodeURIComponent(range)}`);
    nppOptions = (data.values || [])
        .map(row => ({
            id: String(row[idIndex] || "").trim(),
            ten: String(row[tenIndex] || "").trim(),
            hoaHong: String(row[hoaHongIndex] || "").trim()
        }))
        .filter(item => item.id);
    return nppOptions;
}

function getNppById(id) {
    const key = String(id || "").trim().toLowerCase();
    return nppOptions.find(item => item.id.toLowerCase() === key) || null;
}

function getNppDisplayName(id) {
    const npp = getNppById(id);
    return npp?.ten || String(id || "");
}

function getNppCommissionRate(id) {
    const percent = parseMoney(getNppById(id)?.hoaHong || 0);
    return Math.min(Math.max(percent, 0), 100) / 100;
}

async function loadModuleRows(moduleName) {
    await ensureModuleSheet(moduleName);
    const headers = getHeaders(moduleName);
    if (!headers.length) return [];
    const range = `${quoteSheetName(moduleName)}!A2:${colName(headers.length - 1)}`;
    const data = await sheetsFetch(`/values/${encodeURIComponent(range)}`);
    return (data.values || []).map((row, index) => {
        const normalized = headers.map((_, cellIndex) => String(row[cellIndex] ?? ""));
        normalized._sheetRow = index + 2;
        return normalized;
    });
}

let reportCommissionSelectedBrand = "ALL";

function onReportBrandFilterChange(brandVal) {
    reportCommissionSelectedBrand = brandVal ? brandVal : "ALL";
    fetchData();
}

function selectReportCommissionBrand(brand) {
    reportCommissionSelectedBrand = brand || "ALL";
    renderBaoCao();
}

async function buildBaoCaoData() {
    const [donHangRows, nppRows, congNoRows] = await Promise.all([
        loadModuleRows("DON_HANG"),
        loadModuleRows("NPP"),
        loadModuleRows("CONG_NO"),
        loadDsSpOptions()
    ]);
    const donHangHeaders = getHeaders("DON_HANG");
    const nppHeaders = getHeaders("NPP");
    const congNoHeaders = getHeaders("CONG_NO");
    const nppNameById = new Map(nppRows.map(row => [
        String(row[nppHeaders.indexOf("id")] || "").trim(),
        String(row[nppHeaders.indexOf("ten")] || "").trim()
    ]));
    const nppCommissionById = new Map(nppRows.map(row => [
        String(row[nppHeaders.indexOf("id")] || "").trim(),
        String(row[nppHeaders.indexOf("hoa_hong")] || "").trim()
    ]));
    const idSpToBrand = new Map();
    dsSpOptions.forEach(item => {
        if (item.id && item.thuongHieu) {
            idSpToBrand.set(item.id.toLowerCase(), item.thuongHieu);
        }
    });
    const nppIndex = donHangHeaders.indexOf("npp");
    const ngayIndex = donHangHeaders.indexOf("ngay");
    const mdhIndex = donHangHeaders.indexOf("mdh");
    const idSpIndex = donHangHeaders.indexOf("id_sp");
    const tenIndex = donHangHeaders.indexOf("ten");
    const slgIndex = donHangHeaders.indexOf("slg");
    const donHangThuongHieuIndex = donHangHeaders.findIndex(h => slugifyColumnKey(h) === "thuong_hieu" || slugifyColumnKey(h) === "thuonghieu");
    const filterDateFrom = document.getElementById("reportDateFrom")?.value || "";
    const filterDateTo = document.getElementById("reportDateTo")?.value || "";
    const filterNpp = String(document.getElementById("reportNpp")?.value || "").trim().toLowerCase();
    const filterBrand = String(document.getElementById("reportThuongHieu")?.value || "").trim().toLowerCase();
    const filterIdSp = String(document.getElementById("reportIdSp")?.value || "").trim().toLowerCase();
    const fromTime = filterDateFrom ? new Date(`${filterDateFrom}T00:00:00`).getTime() : 0;
    const toTime = filterDateTo ? new Date(`${filterDateTo}T23:59:59`).getTime() : 0;
    const skuSet = new Set();
    const nppSales = new Map();
    const lkNppSales = new Map();
    const fsNppSales = new Map();
    const brandSales = new Map();
    const allBrandSales = new Map();
    const allMonthlySales = new Map();
    const skuSales = new Map();
    const dateSales = new Map();
    const monthlyCollectedDebt = new Map();
    let totalSales = 0;
    let totalQuantity = 0;
    let totalCommission = 0;
    let allBrandsTotalSales = 0;

    donHangRows.forEach(row => {
        const npp = String(row[nppIndex] || "").trim() || "Không có NPP";
        const ngay = String(row[ngayIndex] || "").trim();
        const mdh = String(row[mdhIndex] || "").trim();
        const idSp = String(row[idSpIndex] || "").trim();
        const productName = String(row[tenIndex] || "").trim();
        let brand = "";
        if (donHangThuongHieuIndex >= 0) {
            brand = String(row[donHangThuongHieuIndex] || "").trim();
        }
        if (!brand && idSp) {
            brand = idSpToBrand.get(idSp.toLowerCase()) || "";
        }
        if (!brand && productName) {
            const matchedProd = dsSpOptions.find(p => p.ten && p.ten.toLowerCase() === productName.toLowerCase());
            if (matchedProd?.thuongHieu) brand = matchedProd.thuongHieu;
        }
        if (!brand) brand = "Chưa phân loại";

        const rowTime = getDateTime(ngay);
        if (fromTime && rowTime < fromTime) return;
        if (toTime && rowTime > toTime) return;
        if (filterNpp && npp.toLowerCase() !== filterNpp) return;
        if (filterIdSp && idSp.toLowerCase() !== filterIdSp) return;

        const quantity = parseMoney(row[slgIndex]);
        const sales = getDonHangItemSales(row, donHangHeaders);

        // Track across all brands in the period so brand commission tabs always work
        allBrandsTotalSales += sales;
        if (!allBrandSales.has(brand)) {
            allBrandSales.set(brand, {
                brand,
                sales: 0,
                quantity: 0,
                monthlySales: new Map()
            });
        }
        const allBrandEntry = allBrandSales.get(brand);
        allBrandEntry.sales += sales;
        allBrandEntry.quantity += quantity;
        if (ngay) {
            const d = new Date(rowTime);
            if (d.getTime() > 0) {
                const monthStr = `${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
                allBrandEntry.monthlySales.set(monthStr, (allBrandEntry.monthlySales.get(monthStr) || 0) + sales);
                allMonthlySales.set(monthStr, (allMonthlySales.get(monthStr) || 0) + sales);
            }
        }

        // Track NPP sales per brand (Lock&King vs Fivestar)
        const isFsRow = isFivestarBrand(brand);
        const targetBrandNppMap = isFsRow ? fsNppSales : lkNppSales;
        if (!targetBrandNppMap.has(npp)) {
            targetBrandNppMap.set(npp, {
                npp,
                nppName: nppNameById.get(npp) || "",
                hoaHong: nppCommissionById.get(npp) || "",
                sales: 0,
                quantity: 0,
                orders: new Set()
            });
        }
        const bNppEntry = targetBrandNppMap.get(npp);
        bNppEntry.sales += sales;
        bNppEntry.quantity += quantity;
        if (mdh) bNppEntry.orders.add(mdh);

        if (filterBrand && brand.toLowerCase() !== filterBrand) return;

        totalSales += sales;
        totalQuantity += quantity;
        if (idSp) skuSet.add(idSp);

        if (!brandSales.has(brand)) {
            brandSales.set(brand, {
                brand,
                sales: 0,
                quantity: 0,
                orders: new Set(),
                skuSet: new Set()
            });
        }
        const bEntry = brandSales.get(brand);
        bEntry.sales += sales;
        bEntry.quantity += quantity;
        if (mdh) bEntry.orders.add(mdh);
        if (idSp) bEntry.skuSet.add(idSp);

        if (!nppSales.has(npp)) {
            nppSales.set(npp, {
                npp,
                nppName: nppNameById.get(npp) || "",
                hoaHong: nppCommissionById.get(npp) || "",
                sales: 0,
                commission: 0,
                quantity: 0,
                orders: new Set(),
                sku: new Map()
            });
        }
        const entry = nppSales.get(npp);
        entry.sales += sales;
        const commission = sales * (parseMoney(entry.hoaHong) / 100);
        entry.commission += commission;
        totalCommission += commission;
        entry.quantity += quantity;
        if (mdh) entry.orders.add(mdh);
        if (idSp) {
            if (!entry.sku.has(idSp)) {
                entry.sku.set(idSp, { idSp, productName, quantity: 0, sales: 0 });
            }
            const sku = entry.sku.get(idSp);
            sku.quantity += quantity;
            sku.sales += sales;
        }
        if (idSp) {
            if (!skuSales.has(idSp)) {
                skuSales.set(idSp, { idSp, productName, quantity: 0, sales: 0 });
            }
            const skuEntry = skuSales.get(idSp);
            skuEntry.quantity += quantity;
            skuEntry.sales += sales;
            if (!skuEntry.productName && productName) skuEntry.productName = productName;
        }
        if (ngay) {
            if (!dateSales.has(ngay)) dateSales.set(ngay, { ngay, quantity: 0, sales: 0, commission: 0, orders: new Set() });
            const dateEntry = dateSales.get(ngay);
            dateEntry.quantity += quantity;
            dateEntry.sales += sales;
            dateEntry.commission += commission;
            if (mdh) dateEntry.orders.add(mdh);
        }
    });

    const congNoNgayIndex = congNoHeaders.indexOf("ngay");
    const congNoNppIndex = congNoHeaders.indexOf("npp");
    const congNoTruongIndex = congNoHeaders.indexOf("truong");
    const congNoSoTienIndex = congNoHeaders.indexOf("so_tien");
    congNoRows.forEach(row => {
        const ngay = String(row[congNoNgayIndex] || "").trim();
        const npp = String(row[congNoNppIndex] || "").trim();
        const type = String(row[congNoTruongIndex] || "").trim().toUpperCase();
        const rowTime = getDateTime(ngay);
        if (type !== "THU") return;
        if (fromTime && rowTime < fromTime) return;
        if (toTime && rowTime > toTime) return;
        if (filterNpp && npp.toLowerCase() !== filterNpp) return;
        const d = new Date(rowTime);
        if (!rowTime || Number.isNaN(d.getTime())) return;
        const month = `${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
        monthlyCollectedDebt.set(month, (monthlyCollectedDebt.get(month) || 0) + parseMoney(row[congNoSoTienIndex]));
    });

    const nppRowsReport = [...nppSales.values()]
        .map(entry => ({
            ...entry,
            orderCount: entry.orders.size,
            bestSku: [...entry.sku.values()].sort((a, b) => b.quantity - a.quantity || b.sales - a.sales)[0] || null
        }))
        .sort((a, b) => b.sales - a.sales);

    const brandRowsReport = [...brandSales.values()]
        .map(entry => ({
            ...entry,
            orderCount: entry.orders.size,
            skuCount: entry.skuSet.size
        }))
        .sort((a, b) => b.sales - a.sales);

    // Ensure all brands from DS_SP are also available in allBrandSales for clicking in commission tabs
    dsSpOptions.forEach(item => {
        if (item.thuongHieu && !allBrandSales.has(item.thuongHieu)) {
            allBrandSales.set(item.thuongHieu, {
                brand: item.thuongHieu,
                sales: 0,
                quantity: 0,
                monthlySales: new Map()
            });
        }
    });

    const allBrandRows = [...allBrandSales.values()].sort((a, b) => b.sales - a.sales || a.brand.localeCompare(b.brand, "vi"));

    const lkNppRows = [...lkNppSales.values()]
        .map(entry => ({
            ...entry,
            orderCount: entry.orders.size
        }))
        .sort((a, b) => b.sales - a.sales);

    const fsNppRows = [...fsNppSales.values()]
        .map(entry => ({
            ...entry,
            orderCount: entry.orders.size
        }))
        .sort((a, b) => b.sales - a.sales);

    return {
        totalSales,
        totalQuantity,
        totalCommission,
        totalSku: skuSet.size,
        allBrandsTotalSales,
        bestNpp: nppRowsReport[0] || null,
        nppRows: nppRowsReport,
        lkNppRows,
        fsNppRows,
        brandRows: brandRowsReport,
        allBrandRows,
        allBrandSales,
        allMonthlySales,
        skuRows: [...skuSales.values()].sort((a, b) => b.sales - a.sales),
        monthlyCollectedDebtRows: [...monthlyCollectedDebt.entries()].map(([month, collectedDebt]) => ({ month, collectedDebt })),
        dateRows: [...dateSales.values()]
            .map(entry => ({ ...entry, orderCount: entry.orders.size }))
            .sort((a, b) => getDateTime(b.ngay) - getDateTime(a.ngay))
    };
}

function renderTabs() {
    const tabs = document.getElementById("tabs");
    tabs.innerHTML = MODULE_ORDER
        .filter(moduleName => CONFIG.modules[moduleName] && !CONFIG.modules[moduleName].hidden)
        .map(moduleName => {
            const config = CONFIG.modules[moduleName];
            return `
        <button type="button" class="tab ${moduleName === currentModule ? "active" : ""}" onclick="switchModule('${escapeJsString(moduleName)}')">
            <i data-lucide="${escapeHtml(config.icon)}" style="width:18px;"></i>
            <span>${escapeHtml(config.label)}</span>
        </button>
    `;
        }).join("");
    safeCreateIcons();
}

function updateModuleTitle() {
    const sheetName = document.getElementById("sheetName");
    if (sheetName) sheetName.innerText = getModuleConfig().label.toUpperCase();
}

function updateModuleActions() {
    const uploadBtn = document.getElementById("uploadBtn");
    const addBtn = document.getElementById("addBtn");
    const columnConfigBtn = document.getElementById("columnConfigBtn");
    const searchContainer = document.querySelector(".search-container");
    const isReport = getModuleConfig().reportOnly;
    if (uploadBtn) uploadBtn.style.display = currentModule === "CONG_VIEC" || isReport ? "none" : "flex";
    if (addBtn) addBtn.style.display = isReport ? "none" : "flex";
    if (columnConfigBtn) columnConfigBtn.style.display = "inline-flex";
    if (searchContainer) searchContainer.style.display = isReport ? "none" : "block";
    updateBulkDeleteButton();
}

function canBulkSelectRows() {
    return !getModuleConfig().reportOnly && !(currentModule === "CONG_VIEC" && congViecView === "kanban");
}

function clearSelectedRows() {
    selectedSheetRows.clear();
    updateBulkDeleteButton();
    const selectAll = document.getElementById("selectAllRows");
    if (selectAll) {
        selectAll.checked = false;
        selectAll.indeterminate = false;
    }
}

function updateBulkDeleteButton() {
    const btn = document.getElementById("bulkDeleteBtn");
    if (!btn) return;
    const show = canBulkSelectRows() && selectedSheetRows.size > 0;
    btn.style.display = show ? "flex" : "none";
    if (show) {
        btn.innerHTML = `<i data-lucide="trash-2" style="width:18px;"></i> Xóa đã chọn (${selectedSheetRows.size})`;
        safeCreateIcons();
    }
}

function syncSelectAllCheckbox() {
    const selectAll = document.getElementById("selectAllRows");
    if (!selectAll) return;
    const selectableRows = filteredData.map(row => Number(row._sheetRow)).filter(Boolean);
    const checkedCount = selectableRows.filter(rowNum => selectedSheetRows.has(rowNum)).length;
    selectAll.checked = selectableRows.length > 0 && checkedCount === selectableRows.length;
    selectAll.indeterminate = checkedCount > 0 && checkedCount < selectableRows.length;
}

function toggleRowSelection(sheetRow, checked) {
    const rowNum = Number(sheetRow);
    if (!rowNum) return;
    if (checked) selectedSheetRows.add(rowNum);
    else selectedSheetRows.delete(rowNum);
    syncSelectAllCheckbox();
    updateBulkDeleteButton();
}

function toggleMultipleRowSelection(sheetRows, checked) {
    String(sheetRows || "")
        .split(",")
        .map(value => Number(value))
        .filter(Boolean)
        .forEach(rowNum => {
            if (checked) selectedSheetRows.add(rowNum);
            else selectedSheetRows.delete(rowNum);
        });
    syncSelectAllCheckbox();
    updateBulkDeleteButton();
}

function toggleSelectAllRows(checkbox) {
    const selectableRows = filteredData.map(row => Number(row._sheetRow)).filter(Boolean);
    selectableRows.forEach(rowNum => {
        if (checkbox.checked) selectedSheetRows.add(rowNum);
        else selectedSheetRows.delete(rowNum);
    });
    document.querySelectorAll(".row-select-checkbox").forEach(item => {
        const rowNum = Number(item.dataset.sheetRow);
        item.checked = checkbox.checked;
    });
    checkbox.indeterminate = false;
    updateBulkDeleteButton();
}

async function switchModule(moduleName) {
    currentModule = CONFIG.modules[moduleName] && !CONFIG.modules[moduleName].hidden ? moduleName : "BAO_CAO";
    moduleLoadSeq += 1;
    const seq = moduleLoadSeq;
    try { sessionStorage.setItem(MODULE_STORAGE_KEY, currentModule); } catch (_) { }
    document.getElementById("searchInput").value = "";
    clearSelectedRows();
    updateModuleTitle();
    renderTabs();
    updateModuleActions();
    renderFilterPanel();
    allData = [];
    filteredData = [];
    reportData = null;
    currentPage = 1;
    renderHeaders();
    renderTable();
    requestAnimationFrame(() => {
        if (seq === moduleLoadSeq) fetchData(seq);
    });
}

async function fetchData(seq = moduleLoadSeq) {
    if (getModuleConfig().reportOnly) {
        showLoading("Đang tải báo cáo...");
        try {
            reportData = await buildBaoCaoData();
            if (seq !== moduleLoadSeq) return;
            filteredData = [];
            allData = [];
            currentPage = 1;
            reportSkuPage = 1;
            clearSelectedRows();
            renderHeaders();
            renderTable();
        } catch (err) {
            console.error(err);
            alert("Không thể tải báo cáo: " + err.message);
        } finally {
            hideLoading();
        }
        return;
    }

    showLoading(`Đang tải dữ liệu ${currentModule}...`);
    try {
        if (currentModule === "DON_HANG" || currentModule === "CONG_NO") await loadNppOptions();
        if (seq !== moduleLoadSeq) return;
        await ensureModuleSheet(currentModule);
        if (seq !== moduleLoadSeq) return;
        const headers = getHeaders();
        const range = `${quoteSheetName(currentModule)}!A2:${colName(headers.length - 1)}`;
        const data = await sheetsFetch(`/values/${encodeURIComponent(range)}`);
        if (seq !== moduleLoadSeq) return;
        const rows = data.values || [];
        allData = rows.map((row, index) => {
            const normalized = headers.map((_, cellIndex) => String(row[cellIndex] ?? ""));
            normalized._sheetRow = index + 2;
            return normalized;
        });
        if (currentModule === "DS_SP") {
            await renderFilterPanel();
        }
        filteredData = [...allData];
        applyCurrentFilters();
        currentPage = 1;
        clearSelectedRows();
        renderHeaders();
        renderTable();
    } catch (err) {
        console.error(err);
        alert("Không thể tải dữ liệu: " + err.message);
    } finally {
        hideLoading();
    }
}

async function renderFilterPanel() {
    const panel = document.getElementById("filterPanel");
    if (getModuleConfig().reportOnly) {
        const prevFrom = document.getElementById("reportDateFrom")?.value || getQuickDateRange("month").from;
        const prevTo = document.getElementById("reportDateTo")?.value || getQuickDateRange("month").to;
        const prevNpp = document.getElementById("reportNpp")?.value || "";
        const prevBrand = document.getElementById("reportThuongHieu")?.value || "";
        const prevIdSp = document.getElementById("reportIdSp")?.value || "";
        const brandList = getDsSpBrandOptions();
        panel.innerHTML = `
            <label><span>Từ ngày</span><input id="reportDateFrom" type="date" value="${escapeHtml(prevFrom)}" onchange="fetchData()"></label>
            <label><span>Tới ngày</span><input id="reportDateTo" type="date" value="${escapeHtml(prevTo)}" onchange="fetchData()"></label>
            ${renderQuickDateButtons("report")}
            <label><span>NPP</span><select id="reportNpp" onchange="fetchData()">
                <option value="">Tất cả NPP</option>
                ${nppOptions.map(item => `<option value="${escapeHtml(item.id)}" ${item.id === prevNpp ? "selected" : ""}>${escapeHtml(item.id)}${item.ten ? ` - ${escapeHtml(item.ten)}` : ""}</option>`).join("")}
            </select></label>
            <label><span>Thương hiệu</span><select id="reportThuongHieu" onchange="onReportBrandFilterChange(this.value)">
                <option value="">Tất cả thương hiệu</option>
                ${brandList.map(b => `<option value="${escapeHtml(b)}" ${b === prevBrand ? "selected" : ""}>${escapeHtml(b)}</option>`).join("")}
            </select></label>
            <label><span>ID_SP</span><input id="reportIdSp" type="text" value="${escapeHtml(prevIdSp)}" placeholder="Lọc ID_SP..." oninput="fetchData()"></label>
        `;
        if (!nppOptions.length || !dsSpOptions.length) {
            Promise.all([loadNppOptions(), loadDsSpOptions()]).then(() => {
                if (currentModule === "BAO_CAO") renderFilterPanel();
            }).catch(console.error);
        }
        return;
    }
    if (currentModule === "DON_HANG") {
        panel.innerHTML = `
            <label><span>Từ ngày</span><input id="filterDateFrom" type="date" value="${getQuickDateRange('month').from}" onchange="filterTable()"></label>
            <label><span>Tới ngày</span><input id="filterDateTo" type="date" value="${getQuickDateRange('month').to}" onchange="filterTable()"></label>
            ${renderQuickDateButtons("table")}
            <label><span>NPP</span><select id="filterNpp" onchange="filterTable()">
                <option value="">Tất cả NPP</option>
                ${nppOptions.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.id)}${item.ten ? ` - ${escapeHtml(item.ten)}` : ""}</option>`).join("")}
            </select></label>
            <label><span>MDH</span><input id="filterMdh" type="text" placeholder="Lọc MDH..." oninput="filterTable()"></label>
            <div id="donHangTotalBox" class="filter-summary-box">
                <span>Tổng tiền</span>
                <strong>0</strong>
            </div>
        `;
        if (!nppOptions.length) {
            loadNppOptions().then(() => {
                if (currentModule === "DON_HANG") renderFilterPanel();
            }).catch(console.error);
        }
        return;
    }
    if (currentModule === "CONG_NO") {
        const statusOptions = getModuleConfig("CONG_NO").statusOptions || [];
        panel.innerHTML = `
            <label><span>Từ ngày</span><input id="filterDateFrom" type="date" onchange="filterTable()"></label>
            <label><span>Tới ngày</span><input id="filterDateTo" type="date" onchange="filterTable()"></label>
            ${renderQuickDateButtons("table")}
            <label><span>NPP</span><select id="filterNpp" onchange="filterTable()">
                <option value="">Tất cả NPP</option>
                ${nppOptions.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.id)}${item.ten ? ` - ${escapeHtml(item.ten)}` : ""}</option>`).join("")}
            </select></label>
            <label><span>Trường</span><select id="filterTruong" onchange="filterTable()">
                <option value="">Tất cả</option>
                ${statusOptions.map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("")}
            </select></label>
            <div id="congNoTotalBox" class="filter-summary-box">
                <span>Công nợ còn lại</span>
                <strong>0</strong>
            </div>
        `;
        if (!nppOptions.length) {
            loadNppOptions().then(() => {
                if (currentModule === "CONG_NO") renderFilterPanel();
            }).catch(console.error);
        }
        return;
    }
    if (currentModule === "CONG_VIEC") {
        const statusOptions = getModuleConfig("CONG_VIEC").statusOptions || [];
        panel.innerHTML = `
            <label><span>Từ ngày</span><input id="filterDateFrom" type="date" onchange="filterTable()"></label>
            <label><span>Tới ngày</span><input id="filterDateTo" type="date" onchange="filterTable()"></label>
            ${renderQuickDateButtons("table")}
            <label><span>Tình trạng</span><select id="filterTinhTrang" onchange="filterTable()">
                <option value="">Tất cả tình trạng</option>
                ${statusOptions.map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("")}
            </select></label>
            <label><span>Trạng thái</span><input id="filterTrangThai" type="text" placeholder="Lọc trạng thái..." oninput="filterTable()"></label>
            <button type="button" class="view-toggle-btn" onclick="toggleCongViecView()">
                <i data-lucide="${congViecView === "kanban" ? "table-2" : "columns-3"}" style="width:16px;"></i>
                ${congViecView === "kanban" ? "Xem bảng" : "Xem kanban"}
            </button>
        `;
        safeCreateIcons();
        return;
    }
    if (currentModule === "DS_SP") {
        const currentBrand = document.getElementById("filterThuongHieu")?.value || "";
        const brands = getDsSpBrandOptions();
        panel.innerHTML = `
            <label><span>Thương hiệu</span><select id="filterThuongHieu" onchange="filterTable()">
                <option value="">Tất cả thương hiệu</option>
                ${brands.map(brand => `<option value="${escapeHtml(brand)}" ${currentBrand === brand ? "selected" : ""}>${escapeHtml(brand)}</option>`).join("")}
            </select></label>
        `;
        return;
    }
    panel.innerHTML = "";
}

async function toggleCongViecView() {
    congViecView = congViecView === "kanban" ? "table" : "kanban";
    try { sessionStorage.setItem("kieuDucCongViecView", congViecView); } catch (_) { }
    clearSelectedRows();
    await renderFilterPanel();
    renderHeaders();
    renderTable();
}

function getDateTime(value) {
    const raw = String(value || "").trim();
    if (!raw) return 0;
    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return new Date(`${raw}T00:00:00`).getTime();
    const match = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (match) return new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1])).getTime();
    const date = new Date(raw);
    return Number.isNaN(date.getTime()) ? 0 : date.getTime();
}

function compareValuesForSort(valA, valB, type, direction) {
    const rawA = String(valA ?? "").trim();
    const rawB = String(valB ?? "").trim();
    const emptyA = rawA === "";
    const emptyB = rawB === "";
    if (emptyA && emptyB) return 0;
    if (emptyA) return 1;
    if (emptyB) return -1;

    const dir = direction === "desc" ? -1 : 1;
    if (type === "date") {
        const timeA = getDateTime(rawA);
        const timeB = getDateTime(rawB);
        if (timeA !== timeB) return (timeA - timeB) * dir;
    } else if (type === "number") {
        const numA = parseMoney(rawA);
        const numB = parseMoney(rawB);
        if (numA !== numB) return (numA - numB) * dir;
    }
    return rawA.localeCompare(rawB, "vi", { numeric: true, sensitivity: "base" }) * dir;
}

let lastColResizeTime = 0;

function toggleColumnSort(header) {
    if (Date.now() - lastColResizeTime < 220) return;
    const current = moduleSortState[currentModule];
    let nextDirection = "desc";
    if (current && current.column === header) {
        nextDirection = current.direction === "desc" ? "asc" : "desc";
    } else {
        const colType = header === "tong_tien" || header === "tien_hoa_hong"
            ? "number"
            : getColumnType(header, currentModule);
        nextDirection = colType === "number" || colType === "date" ? "desc" : "asc";
    }
    moduleSortState[currentModule] = { column: header, direction: nextDirection };
    sortFilteredData();
    currentPage = 1;
    renderHeaders();
    renderTable();
}

function startColumnResize(event, header) {
    event.preventDefault();
    event.stopPropagation();
    const resizer = event.currentTarget;
    const th = resizer?.closest("th");
    if (!th) return;
    const colIndex = th.cellIndex;
    const startX = event.clientX;
    const startWidth = th.getBoundingClientRect().width;
    let finalWidth = Math.max(50, Math.round(startWidth));

    resizer.classList.add("is-resizing");
    document.body.classList.add("is-col-resizing");

    const applyWidthToColumn = (w) => {
        const px = `${w}px`;
        th.style.width = px;
        th.style.minWidth = px;
        th.style.maxWidth = px;
        const tbody = document.getElementById("tableBody");
        if (tbody && colIndex >= 0) {
            for (const row of tbody.rows) {
                const td = row.cells[colIndex];
                if (td && td.colSpan === 1) {
                    td.style.width = px;
                    td.style.minWidth = px;
                    td.style.maxWidth = px;
                }
            }
        }
    };

    const onMouseMove = (moveEvent) => {
        const deltaX = moveEvent.clientX - startX;
        finalWidth = Math.max(50, Math.round(startWidth + deltaX));
        applyWidthToColumn(finalWidth);
    };

    const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        resizer.classList.remove("is-resizing");
        document.body.classList.remove("is-col-resizing");
        lastColResizeTime = Date.now();

        const currentCfg = getModuleColumnConfig(currentModule);
        const existingSaved = customColumnConfigs[currentModule] || {};
        customColumnConfigs[currentModule] = {
            headers: currentCfg.headers,
            hiddenHeaders: currentCfg.hiddenHeaders,
            labels: currentCfg.labels,
            types: currentCfg.types,
            widths: { ...currentCfg.widths, [header]: finalWidth },
            aligns: currentCfg.aligns,
            removedDefaultHeaders: existingSaved.removedDefaultHeaders || []
        };
        saveStoredColumnConfigs();

        if (document.getElementById("columnConfigModal")?.classList.contains("active") && columnConfigEditingModule === currentModule) {
            const tr = [...document.querySelectorAll("#columnConfigBody tr")].find(r => r.dataset.origKey === header);
            const widthInput = tr?.querySelector('[data-col-field="width"]');
            if (widthInput) widthInput.value = finalWidth;
        }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
}

function sortFilteredData() {
    const activeSort = moduleSortState[currentModule];
    if (activeSort && activeSort.column && currentModule !== "DON_HANG") {
        const { column, direction } = activeSort;
        const colIndex = getHeaderIndex(column, currentModule);
        const colType = column === "cong_no_con_lai" || column === "tien_hoa_hong"
            ? "number"
            : getColumnType(column, currentModule);
        const congNoBalanceMap = currentModule === "CONG_NO" && column === "cong_no_con_lai"
            ? getCongNoBalanceMap()
            : null;

        filteredData.sort((a, b) => {
            let valA = colIndex >= 0 ? a[colIndex] : "";
            let valB = colIndex >= 0 ? b[colIndex] : "";
            if (currentModule === "CONG_NO" && column === "cong_no_con_lai") {
                valA = congNoBalanceMap?.get(Number(a._sheetRow)) ?? "";
                valB = congNoBalanceMap?.get(Number(b._sheetRow)) ?? "";
            } else if (currentModule === "CONG_NO" && column === "npp") {
                valA = getNppDisplayName(valA);
                valB = getNppDisplayName(valB);
            }
            const cmp = compareValuesForSort(valA, valB, colType, direction);
            if (cmp !== 0) return cmp;
            return Number(b._sheetRow || 0) - Number(a._sheetRow || 0);
        });
        return;
    }
    if (!["DON_HANG", "CONG_NO", "CONG_VIEC"].includes(currentModule)) return;
    const ngayIndex = getHeaderIndex("ngay", currentModule);
    if (ngayIndex < 0) return;
    filteredData.sort((a, b) => getDateTime(b[ngayIndex]) - getDateTime(a[ngayIndex]) || Number(b._sheetRow || 0) - Number(a._sheetRow || 0));
}

function getDonHangSummaryCellValue(summaryRow, header, storageHeaders) {
    if (header === "ngay") return summaryRow.ngay;
    if (header === "mdh") return summaryRow.mdh;
    if (header === "npp") return getNppDisplayName(summaryRow.npp);
    if (header === "tong_tien") return summaryRow.tong_tien;
    const colIdx = storageHeaders.indexOf(header);
    if (colIdx < 0) return "";
    if (isNumericHeader(header, "DON_HANG") && ["slg", "thanh_tien", "tien_chiet_khau", "tien_hang"].includes(header)) {
        return (summaryRow.rawRows || []).reduce((acc, r) => acc + parseMoney(r[colIdx]), 0);
    }
    const vals = [...new Set((summaryRow.rawRows || []).map(r => String(r[colIdx] || "").trim()).filter(Boolean))];
    return vals.join(", ");
}

function getDonHangSummaryRows(rows = filteredData) {
    const headers = getHeaders("DON_HANG");
    const ngayIndex = headers.indexOf("ngay");
    const mdhIndex = headers.indexOf("mdh");
    const nppIndex = headers.indexOf("npp");
    const groups = new Map();
    rows.forEach(row => {
        const mdh = String(row[mdhIndex] || "").trim();
        const key = mdh || `__row_${row._sheetRow}`;
        if (!groups.has(key)) {
            groups.set(key, {
                ngay: String(row[ngayIndex] || "").trim(),
                mdh,
                npp: String(row[nppIndex] || "").trim(),
                tong_tien: 0,
                sheetRows: [],
                rawRows: []
            });
        }
        const entry = groups.get(key);
        entry.tong_tien += getDonHangItemSales(row, headers);
        entry.sheetRows.push(Number(row._sheetRow));
        entry.rawRows.push(row);
        if (getDateTime(row[ngayIndex]) > getDateTime(entry.ngay)) entry.ngay = String(row[ngayIndex] || "").trim();
        if (!entry.npp && row[nppIndex]) entry.npp = String(row[nppIndex] || "").trim();
    });
    const list = [...groups.values()];
    const activeSort = moduleSortState.DON_HANG;
    if (activeSort && activeSort.column) {
        const { column, direction } = activeSort;
        const colType = column === "tong_tien" ? "number" : (column === "npp" ? "text" : getColumnType(column, "DON_HANG"));
        return list.sort((a, b) => {
            const valA = getDonHangSummaryCellValue(a, column, headers);
            const valB = getDonHangSummaryCellValue(b, column, headers);
            return compareValuesForSort(valA, valB, colType, direction) || (getDateTime(b.ngay) - getDateTime(a.ngay));
        });
    }
    return list.sort((a, b) => getDateTime(b.ngay) - getDateTime(a.ngay));
}

function getCurrentDisplayRowCount() {
    if (currentModule === "DON_HANG") return getDonHangSummaryRows().length;
    return filteredData.length;
}

function getCongNoBalanceMap(rows = allData) {
    const headers = getHeaders("CONG_NO");
    const ngayIndex = headers.indexOf("ngay");
    const nppIndex = headers.indexOf("npp");
    const truongIndex = headers.indexOf("truong");
    const soTienIndex = headers.indexOf("so_tien");
    const balances = new Map();
    const result = new Map();
    [...rows]
        .sort((a, b) => getDateTime(a[ngayIndex]) - getDateTime(b[ngayIndex]) || Number(a._sheetRow || 0) - Number(b._sheetRow || 0))
        .forEach(row => {
            const npp = String(row[nppIndex] || "").trim();
            const key = npp || "__NO_NPP__";
            const type = String(row[truongIndex] || "").trim().toUpperCase();
            const amount = parseMoney(row[soTienIndex]);
            const nextBalance = (balances.get(key) || 0) + (type === "THU" ? -amount : amount);
            balances.set(key, nextBalance);
            if (row._sheetRow) result.set(Number(row._sheetRow), nextBalance);
        });
    return result;
}

function getCongNoTotal(rows = filteredData) {
    const headers = getHeaders("CONG_NO");
    const truongIndex = headers.indexOf("truong");
    const soTienIndex = headers.indexOf("so_tien");
    return rows.reduce((sum, row) => {
        const type = String(row[truongIndex] || "").trim().toUpperCase();
        const amount = parseMoney(row[soTienIndex]);
        return sum + (type === "THU" ? -amount : amount);
    }, 0);
}

function updateCongNoTotalBox() {
    const box = document.getElementById("congNoTotalBox");
    if (!box) return;
    const valueEl = box.querySelector("strong");
    if (valueEl) valueEl.innerText = formatDisplayNumber(getCongNoTotal());
}

function getDonHangItemSales(row, headers = getHeaders("DON_HANG")) {
    const thanhTienIndex = headers.indexOf("thanh_tien");
    const tienHangIndex = headers.indexOf("tien_hang");
    const tienChietKhauIndex = headers.indexOf("tien_chiet_khau");
    if (tienHangIndex >= 0 && row[tienHangIndex] !== undefined && row[tienHangIndex] !== "") {
        return parseMoney(row[tienHangIndex]);
    }
    return parseMoney(row[thanhTienIndex]) - parseMoney(row[tienChietKhauIndex]);
}

function getDonHangTotal(rows = filteredData) {
    const headers = getHeaders("DON_HANG");
    return rows.reduce((sum, row) => sum + getDonHangItemSales(row, headers), 0);
}

function updateDonHangTotalBox() {
    const box = document.getElementById("donHangTotalBox");
    if (!box) return;
    const valueEl = box.querySelector("strong");
    if (valueEl) valueEl.innerText = formatDisplayNumber(getDonHangTotal());
}

function formatDateInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function getQuickDateRange(type) {
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const end = new Date(start);
    if (type === "yesterday") {
        start.setDate(start.getDate() - 1);
        end.setDate(end.getDate() - 1);
    }
    if (type === "week") {
        const day = start.getDay() || 7;
        start.setDate(start.getDate() - day + 1);
        end.setTime(start.getTime());
        end.setDate(end.getDate() + 6);
    }
    if (type === "month") {
        start.setDate(1);
        end.setTime(start.getTime());
        end.setMonth(end.getMonth() + 1, 0);
    }
    return { from: formatDateInput(start), to: formatDateInput(end) };
}

function renderQuickDateButtons(scope) {
    return `
        <div class="quick-date-buttons" aria-label="Lọc nhanh theo ngày">
            <button type="button" onclick="applyQuickDateFilter('${scope}', 'today')">Hôm nay</button>
            <button type="button" onclick="applyQuickDateFilter('${scope}', 'yesterday')">Hôm qua</button>
            <button type="button" onclick="applyQuickDateFilter('${scope}', 'week')">Tuần này</button>
            <select class="quick-month-select" onchange="applyQuickMonthFilter('${scope}', this.value)" style="margin-left: 4px; padding: 4px 8px; border: 1px solid var(--border); border-radius: var(--radius-sm); outline: none; background: #fff;">
                <option value="">Chọn tháng</option>
                ${Array.from({length: 12}, (_, i) => `<option value="${i + 1}">Tháng ${i + 1}</option>`).join("")}
            </select>
        </div>
    `;
}

function applyQuickMonthFilter(scope, monthStr) {
    if (!monthStr) return;
    const month = parseInt(monthStr, 10);
    const today = new Date();
    const start = new Date(today.getFullYear(), month - 1, 1);
    const end = new Date(today.getFullYear(), month, 0);
    
    const fromInput = document.getElementById(scope === "report" ? "reportDateFrom" : "filterDateFrom");
    const toInput = document.getElementById(scope === "report" ? "reportDateTo" : "filterDateTo");
    if (fromInput) fromInput.value = formatDateInput(start);
    if (toInput) toInput.value = formatDateInput(end);
    if (scope === "report") fetchData();
    else filterTable();
}

function applyQuickDateFilter(scope, type) {
    const range = getQuickDateRange(type);
    const fromInput = document.getElementById(scope === "report" ? "reportDateFrom" : "filterDateFrom");
    const toInput = document.getElementById(scope === "report" ? "reportDateTo" : "filterDateTo");
    if (fromInput) fromInput.value = range.from;
    if (toInput) toInput.value = range.to;
    if (scope === "report") fetchData();
    else filterTable();
}

function formatChartDateLabel(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";
    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
        const [year, month, day] = raw.split("-");
        return `${day}/${month}`;
    }
    const match = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (match) return `${match[1].padStart(2, "0")}/${match[2].padStart(2, "0")}`;
    return raw.length > 8 ? raw.slice(0, 8) : raw;
}

function applyCurrentFilters() {
    const term = document.getElementById("searchInput")?.value.trim().toLowerCase() || "";
    const dateFrom = document.getElementById("filterDateFrom")?.value || "";
    const dateTo = document.getElementById("filterDateTo")?.value || "";
    const fromTime = dateFrom ? new Date(`${dateFrom}T00:00:00`).getTime() : 0;
    const toTime = dateTo ? new Date(`${dateTo}T23:59:59`).getTime() : 0;

    filteredData = allData.filter(row => {
        const matchesSearch = !term || row.some(cell => String(cell).toLowerCase().includes(term));
        if (!matchesSearch) return false;

        if (currentModule === "DON_HANG") {
            const ngayIndex = getHeaderIndex("ngay", "DON_HANG");
            const nppIndex = getHeaderIndex("npp", "DON_HANG");
            const mdhIndex = getHeaderIndex("mdh", "DON_HANG");
            const npp = (document.getElementById("filterNpp")?.value || "").toLowerCase();
            const mdh = (document.getElementById("filterMdh")?.value || "").toLowerCase();
            const rowTime = getDateTime(row[ngayIndex]);
            return (!fromTime || rowTime >= fromTime)
                && (!toTime || rowTime <= toTime)
                && (!npp || String(row[nppIndex] || "").toLowerCase() === npp)
                && (!mdh || String(row[mdhIndex] || "").toLowerCase().includes(mdh));
        }

        if (currentModule === "CONG_NO") {
            const ngayIndex = getHeaderIndex("ngay", "CONG_NO");
            const nppIndex = getHeaderIndex("npp", "CONG_NO");
            const truongIndex = getHeaderIndex("truong", "CONG_NO");
            const npp = (document.getElementById("filterNpp")?.value || "").toLowerCase();
            const truong = (document.getElementById("filterTruong")?.value || "").toLowerCase();
            const rowTime = getDateTime(row[ngayIndex]);
            return (!fromTime || rowTime >= fromTime)
                && (!toTime || rowTime <= toTime)
                && (!npp || String(row[nppIndex] || "").toLowerCase() === npp)
                && (!truong || String(row[truongIndex] || "").toLowerCase() === truong);
        }

        if (currentModule === "CONG_VIEC") {
            const ngayIndex = getHeaderIndex("ngay", "CONG_VIEC");
            const tinhTrangIndex = getHeaderIndex("tinh_trang", "CONG_VIEC");
            const trangThaiIndex = getHeaderIndex("trang_thai", "CONG_VIEC");
            const tinhTrang = (document.getElementById("filterTinhTrang")?.value || "").toLowerCase();
            const trangThai = (document.getElementById("filterTrangThai")?.value || "").toLowerCase();
            const rowTime = getDateTime(row[ngayIndex]);
            return (!fromTime || rowTime >= fromTime)
                && (!toTime || rowTime <= toTime)
                && (!tinhTrang || String(row[tinhTrangIndex] || "").toLowerCase() === tinhTrang)
                && (!trangThai || String(row[trangThaiIndex] || "").toLowerCase().includes(trangThai));
        }

        if (currentModule === "DS_SP") {
            const thuongHieuIndex = getHeaderIndex("thuong_hieu", "DS_SP");
            const filterBrand = (document.getElementById("filterThuongHieu")?.value || "").trim().toLowerCase();
            return !filterBrand || thuongHieuIndex < 0 || String(row[thuongHieuIndex] || "").trim().toLowerCase() === filterBrand;
        }

        return true;
    });
    sortFilteredData();
}

function renderHeaders() {
    const head = document.getElementById("tableHead");
    if (getModuleConfig().reportOnly || !canBulkSelectRows()) {
        head.innerHTML = "";
        return;
    }
    const headers = getVisibleTableHeaders(currentModule);
    const activeSort = moduleSortState[currentModule];
    head.innerHTML = `<tr>
        <th class="select-col">
            <input id="selectAllRows" type="checkbox" onchange="toggleSelectAllRows(this)" onclick="event.stopPropagation()" title="Chọn tất cả dòng đang lọc">
        </th>
        ${headers.map(header => {
            const isSorted = activeSort && activeSort.column === header;
            const sortIcon = isSorted
                ? (activeSort.direction === "asc" ? "arrow-up" : "arrow-down")
                : "arrow-up-down";
            const sortTitle = isSorted
                ? (activeSort.direction === "asc" ? "Đang xếp Tăng dần (bấm để Giảm dần)" : "Đang xếp Giảm dần (bấm để Tăng dần)")
                : `Sắp xếp theo cột ${getHeaderLabel(header, currentModule)}`;
            const styleAttr = getCellStyleAttr(header, currentModule);
            return `<th class="sortable-th ${isSorted ? "is-sorted" : ""}"${styleAttr} onclick="toggleColumnSort('${escapeJsString(header)}')" title="${escapeHtml(sortTitle)}">
                <span class="th-col-label">
                    ${escapeHtml(getHeaderLabel(header, currentModule))}
                    <button type="button" class="th-col-sort-btn ${isSorted ? "active" : ""}" onclick="event.stopPropagation(); toggleColumnSort('${escapeJsString(header)}')" title="${escapeHtml(sortTitle)}">
                        <i data-lucide="${sortIcon}" style="width:14px;"></i>
                    </button>
                </span>
                <span class="col-resizer" onmousedown="startColumnResize(event, '${escapeJsString(header)}')" onclick="event.stopPropagation()" title="Kéo để chỉnh độ rộng cột"></span>
            </th>`;
        }).join("")}
    </tr>`;
    syncSelectAllCheckbox();
    safeCreateIcons();
}

function renderTable() {
    if (getModuleConfig().reportOnly) {
        document.getElementById("tableWrapper").style.display = "none";
        document.getElementById("kanbanBoard").style.display = "none";
        renderBaoCao();
        renderPagination();
        return;
    }
    document.getElementById("reportView")?.remove();
    const showKanban = currentModule === "CONG_VIEC" && congViecView === "kanban";
    document.getElementById("tableWrapper").style.display = showKanban ? "none" : "block";
    document.getElementById("kanbanBoard").style.display = showKanban ? "grid" : "none";
    if (showKanban) {
        renderCongViecKanban();
        renderPagination();
        return;
    }

    const tbody = document.getElementById("tableBody");
    const storageHeaders = getHeaders();
    if (currentModule === "DON_HANG") {
        const headers = getVisibleTableHeaders("DON_HANG");
        const start = (currentPage - 1) * rowsPerPage;
        const pageData = getDonHangSummaryRows().slice(start, start + rowsPerPage);
        tbody.innerHTML = pageData.map(row => {
            const sheetRows = row.sheetRows.join(",");
            const allChecked = row.sheetRows.length > 0 && row.sheetRows.every(sheetRow => selectedSheetRows.has(sheetRow));
            const cells = headers.map(header => {
                const styleAttr = getCellStyleAttr(header, "DON_HANG");
                if (header === "ngay") return `<td${styleAttr}>${escapeHtml(row.ngay)}</td>`;
                if (header === "mdh") return `<td${styleAttr}>${escapeHtml(row.mdh)}</td>`;
                if (header === "npp") return `<td${styleAttr}>${escapeHtml(getNppDisplayName(row.npp))}</td>`;
                if (header === "tong_tien") return `<td${styleAttr}>${escapeHtml(formatDisplayNumber(row.tong_tien))}</td>`;
                const colIdx = storageHeaders.indexOf(header);
                if (colIdx < 0) return `<td${styleAttr}></td>`;
                if (isNumericHeader(header, "DON_HANG") && ["slg", "thanh_tien", "tien_chiet_khau", "tien_hang"].includes(header)) {
                    const sumVal = (row.rawRows || []).reduce((acc, r) => acc + parseMoney(r[colIdx]), 0);
                    return `<td${styleAttr}>${escapeHtml(formatDisplayNumber(sumVal))}</td>`;
                }
                const vals = [...new Set((row.rawRows || []).map(r => String(r[colIdx] || "").trim()).filter(Boolean))];
                const text = isNumericHeader(header, "DON_HANG")
                    ? vals.map(v => formatDisplayNumber(v)).join(", ")
                    : vals.join(", ");
                return `<td${styleAttr}>${escapeHtml(text)}</td>`;
            }).join("");
            const selectCell = `<td class="select-col">
                <input class="row-select-checkbox" type="checkbox" data-sheet-row="${escapeHtml(sheetRows)}" ${allChecked ? "checked" : ""} onclick="event.stopPropagation()" onchange="toggleMultipleRowSelection('${escapeJsString(sheetRows)}', this.checked)">
            </td>`;
            return `<tr ondblclick="openDonHangForm('${escapeJsString(row.mdh || "")}')">${selectCell}${cells}</tr>`;
        }).join("");
        if (!pageData.length) {
            tbody.innerHTML = `<tr><td colspan="${headers.length + 1}">Chưa có dữ liệu.</td></tr>`;
        }
        syncSelectAllCheckbox();
        updateDonHangTotalBox();
        renderPagination();
        return;
    }
    const headers = getVisibleTableHeaders(currentModule);
    const mdhIndex = storageHeaders.indexOf("mdh");
    const nppIndex = storageHeaders.indexOf("npp");
    const start = (currentPage - 1) * rowsPerPage;
    const pageData = filteredData.slice(start, start + rowsPerPage);
    const congNoBalanceMap = currentModule === "CONG_NO" ? getCongNoBalanceMap() : null;
    tbody.innerHTML = pageData.map((row, rowIndex) => {
        const cells = headers.map((header) => {
            const styleAttr = getCellStyleAttr(header, currentModule);
            const sourceIndex = storageHeaders.indexOf(header);
            let value = header === "tien_hoa_hong"
                ? getDonHangItemSales(row, storageHeaders) * getNppCommissionRate(row[nppIndex])
                : row[sourceIndex] || "";
            if (currentModule === "CONG_NO" && header === "cong_no_con_lai") {
                value = congNoBalanceMap?.get(Number(row._sheetRow)) ?? "";
            }
            if ((currentModule === "DON_HANG" || currentModule === "CONG_NO") && header === "npp") {
                value = getNppDisplayName(row[nppIndex]);
            }
            const text = String(value).trim();
            if (text.startsWith("http://") || text.startsWith("https://")) {
                return `<td${styleAttr}><a href="${escapeHtml(text)}" target="_blank">Link</a></td>`;
            }
            const displayValue = isNumericHeader(header) || header === "tien_hoa_hong" ? formatDisplayNumber(value) : value;
            return `<td${styleAttr}>${escapeHtml(displayValue)}</td>`;
        }).join("");
        const sheetRow = Number(row._sheetRow);
        const selectCell = `<td class="select-col">
            <input class="row-select-checkbox" type="checkbox" data-sheet-row="${sheetRow}" ${selectedSheetRows.has(sheetRow) ? "checked" : ""} onclick="event.stopPropagation()" onchange="toggleRowSelection(${sheetRow}, this.checked)">
        </td>`;
        const action = currentModule === "DON_HANG"
            ? `openDonHangForm('${escapeJsString(row[mdhIndex] || "")}')`
            : `openRecordForm(${start + rowIndex})`;
        return `<tr ondblclick="${action}">${selectCell}${cells}</tr>`;
    }).join("");
    if (!pageData.length) {
        tbody.innerHTML = `<tr><td colspan="${headers.length + 1}">Chưa có dữ liệu.</td></tr>`;
    }
    syncSelectAllCheckbox();
    if (currentModule === "CONG_NO") updateCongNoTotalBox();
    renderPagination();
}

function getSalesCommissionBreakdown(totalSales) {
    const sales = parseMoney(totalSales);
    let t_under524 = 0, t_524_874 = 0, t_base874 = 0;
    let t_over_1 = 0, t_over_15 = 0, t_over_175 = 0, t_over_185 = 0, t_over_2 = 0;

    if (sales < 524000000) {
        // Tỷ lệ 0%
    } else if (sales < 874000000) {
        t_524_874 = sales * 0.005;
    } else {
        t_base874 = 874000000 * 0.01;
        const excess = sales - 874000000;
        if (sales < 1232000000) {
            t_over_1 = excess * 0.01;
        } else if (sales < 1456000000) {
            t_over_15 = excess * 0.015;
        } else if (sales < 1904000000) {
            t_over_175 = excess * 0.0175;
        } else if (sales < 2240000000) {
            t_over_185 = excess * 0.0185;
        } else {
            t_over_2 = excess * 0.02;
        }
    }
    
    const total = t_under524 + t_524_874 + t_base874 + t_over_1 + t_over_15 + t_over_175 + t_over_185 + t_over_2;
    return {
        t_under524, t_524_874, t_base874,
        t_over_1, t_over_15, t_over_175, t_over_185, t_over_2,
        total
    };
}

function isFivestarBrand(brandName) {
    const s = slugifyColumnKey(brandName || "");
    return s.includes("fivestar") || s.includes("five_star");
}

function renderBaoCao() {
    document.getElementById("reportView")?.remove();
    const data = reportData || { totalSales: 0, totalQuantity: 0, totalCommission: 0, totalSku: 0, allBrandsTotalSales: 0, bestNpp: null, nppRows: [], brandRows: [], allBrandRows: [], allBrandSales: new Map(), allMonthlySales: new Map(), skuRows: [], monthlyCollectedDebtRows: [], dateRows: [] };
    const reportNppName = row => row?.nppName || row?.npp || "";
    const skuPageSize = 10;
    const skuTotalPages = Math.max(Math.ceil((data.skuRows || []).length / skuPageSize), 1);
    reportSkuPage = Math.min(Math.max(reportSkuPage, 1), skuTotalPages);
    const skuPageRows = (data.skuRows || []).slice((reportSkuPage - 1) * skuPageSize, reportSkuPage * skuPageSize);
    
    const activeBrand = reportCommissionSelectedBrand || "ALL";

    // Collect all months
    const allCommissionMonths = new Set();
    for (const [_, bData] of (data.allBrandSales || new Map()).entries()) {
        for (const m of bData.monthlySales.keys()) allCommissionMonths.add(m);
    }
    if (!allCommissionMonths.size && data.allMonthlySales) {
        for (const m of data.allMonthlySales.keys()) allCommissionMonths.add(m);
    }
    if (!allCommissionMonths.size && (data.dateRows || []).length) {
        (data.dateRows || []).forEach(row => {
            const d = new Date(getDateTime(row.ngay));
            if (d.getTime() > 0) {
                allCommissionMonths.add(`${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`);
            }
        });
    }
    const sortedCommissionMonths = [...allCommissionMonths].sort((a, b) => {
        const [am, ay] = a.split("/");
        const [bm, by] = b.split("/");
        return (by - ay) || (bm - am);
    });

    // Map monthly sales by brand category
    const monthlyBrandMap = new Map();
    sortedCommissionMonths.forEach(m => monthlyBrandMap.set(m, { lkSales: 0, fsSales: 0, totalSales: 0 }));

    if (data.allBrandSales && data.allBrandSales.size) {
        for (const [bName, bData] of data.allBrandSales.entries()) {
            const isFs = isFivestarBrand(bName);
            for (const [m, s] of bData.monthlySales.entries()) {
                if (!monthlyBrandMap.has(m)) monthlyBrandMap.set(m, { lkSales: 0, fsSales: 0, totalSales: 0 });
                const entry = monthlyBrandMap.get(m);
                entry.totalSales += s;
                if (isFs) entry.fsSales += s;
                else entry.lkSales += s;
            }
        }
    } else if (data.allMonthlySales && data.allMonthlySales.size) {
        for (const [m, s] of data.allMonthlySales.entries()) {
            if (!monthlyBrandMap.has(m)) monthlyBrandMap.set(m, { lkSales: 0, fsSales: 0, totalSales: 0 });
            const entry = monthlyBrandMap.get(m);
            entry.totalSales += s;
            entry.lkSales += s;
        }
    }

    // 1. Fivestar monthly calculation (0.5% fixed)
    let sumFsSales = 0;
    let sumFsComm = 0;
    const fivestarMonthlyRows = sortedCommissionMonths.map(m => {
        const sales = monthlyBrandMap.get(m)?.fsSales || 0;
        const commission = sales * 0.005;
        sumFsSales += sales;
        sumFsComm += commission;
        return { month: m, sales, commission };
    });

    // 2. Lock&King monthly calculation (tiered brackets)
    let sumLkSales = 0;
    let sumLkComm = 0;
    let sumLk_under524 = 0, sumLk_524_874 = 0, sumLk_base874 = 0;
    let sumLk_over_1 = 0, sumLk_over_15 = 0, sumLk_over_175 = 0, sumLk_over_185 = 0, sumLk_over_2 = 0;
    const lockKingMonthlyRows = sortedCommissionMonths.map(m => {
        // If a specific non-fivestar brand was clicked, use only that brand's sales if present
        let sales = 0;
        if (activeBrand !== "ALL" && !isFivestarBrand(activeBrand)) {
            sales = data.allBrandSales?.get(activeBrand)?.monthlySales?.get(m) || 0;
        } else {
            sales = monthlyBrandMap.get(m)?.lkSales || 0;
        }
        const bd = getSalesCommissionBreakdown(sales);
        const commission = bd.total;
        sumLkSales += sales;
        sumLkComm += commission;
        sumLk_under524 += bd.t_under524;
        sumLk_524_874 += bd.t_524_874;
        sumLk_base874 += bd.t_base874;
        sumLk_over_1 += bd.t_over_1;
        sumLk_over_15 += bd.t_over_15;
        sumLk_over_175 += bd.t_over_175;
        sumLk_over_185 += bd.t_over_185;
        sumLk_over_2 += bd.t_over_2;
        return {
            month: m,
            sales,
            t_under524: bd.t_under524,
            t_524_874: bd.t_524_874,
            t_base874: bd.t_base874,
            t_over_1: bd.t_over_1,
            t_over_15: bd.t_over_15,
            t_over_175: bd.t_over_175,
            t_over_185: bd.t_over_185,
            t_over_2: bd.t_over_2,
            commission
        };
    });

    // 3. Combined monthly calculation
    const combinedMonthlyRows = sortedCommissionMonths.map(m => {
        const lk = lockKingMonthlyRows.find(r => r.month === m) || { sales: 0, commission: 0 };
        const fs = fivestarMonthlyRows.find(r => r.month === m) || { sales: 0, commission: 0 };
        return {
            month: m,
            lkSales: lk.sales,
            lkComm: lk.commission,
            fsSales: fs.sales,
            fsComm: fs.commission,
            totalComm: lk.commission + fs.commission
        };
    });
    const totalAllCommission = sumLkComm + sumFsComm;

    // Determine current display commission in metrics
    let displayCommissionTitle = "Tổng hoa hồng";
    let displayCommissionValue = totalAllCommission;
    if (isFivestarBrand(activeBrand)) {
        displayCommissionTitle = `Hoa hồng (${activeBrand}: 0.5%)`;
        displayCommissionValue = sumFsComm;
    } else if (activeBrand !== "ALL") {
        displayCommissionTitle = `Hoa hồng (${activeBrand})`;
        displayCommissionValue = sumLkComm;
    }

    const collectedDebtByMonth = new Map((data.monthlyCollectedDebtRows || []).map(row => [row.month, row.collectedDebt]));
    const monthlyCollectionMonths = new Set([...allCommissionMonths, ...collectedDebtByMonth.keys()]);
    const monthlyCollectionRows = [...monthlyCollectionMonths].map(month => {
        const sales = monthlyBrandMap.get(month)?.totalSales || 0;
        const collectedDebt = collectedDebtByMonth.get(month) || 0;
        return {
            month,
            sales,
            collectedDebt,
            collectionRate: sales ? (collectedDebt / sales) * 100 : 0,
            target90Sales: sales * 0.9
        };
    }).sort((a, b) => {
        const [am, ay] = a.month.split("/");
        const [bm, by] = b.month.split("/");
        return (by - ay) || (bm - am);
    });
    const totalCollectedDebt = monthlyCollectionRows.reduce((sum, row) => sum + row.collectedDebt, 0);
    const totalTarget90Sales = monthlyCollectionRows.reduce((sum, row) => sum + row.target90Sales, 0);
    const totalCollectionRate = data.totalSales ? (totalCollectedDebt / data.totalSales) * 100 : 0;
    const formatPercent = value => `${new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 2 }).format(Number(value) || 0)}%`;

    const lkChartColors = ["#4285f4", "#12b886", "#f6a21a", "#ef5350", "#7e57c2", "#26a69a", "#ffca28", "#5c6bc0"];
    const lkNppList = (data.lkNppRows && data.lkNppRows.length) ? data.lkNppRows : (data.nppRows || []);
    const lkChartTotal = lkNppList.reduce((sum, row) => sum + row.sales, 0);
    let lkChartCursor = 0;
    const lkChartSegments = lkNppList.map((row, index) => {
        const start = lkChartCursor;
        const percent = lkChartTotal ? (row.sales / lkChartTotal) * 100 : 0;
        lkChartCursor += percent;
        return {
            ...row,
            color: lkChartColors[index % lkChartColors.length],
            percent,
            segment: `${lkChartColors[index % lkChartColors.length]} ${start}% ${lkChartCursor}%`
        };
    });

    const fsChartColors = ["#0284c7", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#14b8a6", "#f97316", "#06b6d4"];
    const fsNppList = data.fsNppRows || [];
    const fsChartTotal = fsNppList.reduce((sum, row) => sum + row.sales, 0);
    let fsChartCursor = 0;
    const fsChartSegments = fsNppList.map((row, index) => {
        const start = fsChartCursor;
        const percent = fsChartTotal ? (row.sales / fsChartTotal) * 100 : 0;
        fsChartCursor += percent;
        return {
            ...row,
            color: fsChartColors[index % fsChartColors.length],
            percent,
            segment: `${fsChartColors[index % fsChartColors.length]} ${start}% ${fsChartCursor}%`
        };
    });

    // Helper to render commission table according to active brand
    let commissionTableHtml = "";
    if (activeBrand === "ALL") {
        commissionTableHtml = `
            <table>
                <thead>
                    <tr>
                        <th>Tháng</th>
                        <th>Doanh số Lock&amp;King</th>
                        <th>Hoa hồng Lock&amp;King (Bậc thang)</th>
                        <th>Doanh số Fivestar</th>
                        <th>Hoa hồng Fivestar (0.5%)</th>
                        <th>Tổng hoa hồng</th>
                    </tr>
                </thead>
                <tbody>
                    ${combinedMonthlyRows.map(row => `
                        <tr>
                            <td>${escapeHtml(row.month)}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.lkSales))}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.lkComm))}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.fsSales))}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.fsComm))}</td>
                            <td><strong>${escapeHtml(formatDisplayNumber(row.totalComm))}</strong></td>
                        </tr>
                    `).join("") || `<tr><td colspan="6">Chưa có dữ liệu hoa hồng.</td></tr>`}
                    ${combinedMonthlyRows.length ? `
                        <tr class="report-total-row">
                            <td>Tổng cộng</td>
                            <td>${escapeHtml(formatDisplayNumber(sumLkSales))}</td>
                            <td>${escapeHtml(formatDisplayNumber(sumLkComm))}</td>
                            <td>${escapeHtml(formatDisplayNumber(sumFsSales))}</td>
                            <td>${escapeHtml(formatDisplayNumber(sumFsComm))}</td>
                            <td><strong>${escapeHtml(formatDisplayNumber(totalAllCommission))}</strong></td>
                        </tr>
                    ` : ""}
                </tbody>
            </table>
        `;
    } else if (isFivestarBrand(activeBrand)) {
        commissionTableHtml = `
            <table>
                <thead>
                    <tr>
                        <th>Tháng</th>
                        <th>Doanh số (Fivestar)</th>
                        <th>Tỷ lệ hoa hồng</th>
                        <th>Công thức tính</th>
                        <th>Hoa hồng Fivestar (0.5%)</th>
                    </tr>
                </thead>
                <tbody>
                    ${fivestarMonthlyRows.map(row => `
                        <tr>
                            <td>${escapeHtml(row.month)}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.sales))}</td>
                            <td>0.5%</td>
                            <td>${escapeHtml(formatDisplayNumber(row.sales))} &times; 0.5%</td>
                            <td><strong>${escapeHtml(formatDisplayNumber(row.commission))}</strong></td>
                        </tr>
                    `).join("") || `<tr><td colspan="5">Chưa có dữ liệu hoa hồng Fivestar.</td></tr>`}
                    ${fivestarMonthlyRows.length ? `
                        <tr class="report-total-row">
                            <td>Tổng cộng (Fivestar)</td>
                            <td>${escapeHtml(formatDisplayNumber(sumFsSales))}</td>
                            <td>0.5%</td>
                            <td>${escapeHtml(formatDisplayNumber(sumFsSales))} &times; 0.5%</td>
                            <td><strong>${escapeHtml(formatDisplayNumber(sumFsComm))}</strong></td>
                        </tr>
                    ` : ""}
                </tbody>
            </table>
        `;
    } else {
        commissionTableHtml = `
            <table>
                <thead>
                    <tr>
                        <th>Tháng</th>
                        <th>Doanh số (${escapeHtml(activeBrand)})</th>
                        <th>&lt; 524tr (0%)</th>
                        <th>524-874tr (0.5%)</th>
                        <th>Cố định 874tr (1%)</th>
                        <th>874tr-1.232tỷ (1%)</th>
                        <th>1.232-1.456tỷ (1.5%)</th>
                        <th>1.456-1.904tỷ (1.75%)</th>
                        <th>1.904-2.24tỷ (1.85%)</th>
                        <th>&gt;= 2.24tỷ (2%)</th>
                        <th>Hoa hồng</th>
                    </tr>
                </thead>
                <tbody>
                    ${lockKingMonthlyRows.map(row => `
                        <tr>
                            <td>${escapeHtml(row.month)}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.sales))}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.t_under524))}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.t_524_874))}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.t_base874))}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.t_over_1))}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.t_over_15))}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.t_over_175))}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.t_over_185))}</td>
                            <td>${escapeHtml(formatDisplayNumber(row.t_over_2))}</td>
                            <td><strong>${escapeHtml(formatDisplayNumber(row.commission))}</strong></td>
                        </tr>
                    `).join("") || `<tr><td colspan="11">Chưa có dữ liệu hoa hồng cho ${escapeHtml(activeBrand)}.</td></tr>`}
                    ${lockKingMonthlyRows.length ? `
                        <tr class="report-total-row">
                            <td>Tổng cộng (${escapeHtml(activeBrand)})</td>
                            <td>${escapeHtml(formatDisplayNumber(sumLkSales))}</td>
                            <td>${escapeHtml(formatDisplayNumber(sumLk_under524))}</td>
                            <td>${escapeHtml(formatDisplayNumber(sumLk_524_874))}</td>
                            <td>${escapeHtml(formatDisplayNumber(sumLk_base874))}</td>
                            <td>${escapeHtml(formatDisplayNumber(sumLk_over_1))}</td>
                            <td>${escapeHtml(formatDisplayNumber(sumLk_over_15))}</td>
                            <td>${escapeHtml(formatDisplayNumber(sumLk_over_175))}</td>
                            <td>${escapeHtml(formatDisplayNumber(sumLk_over_185))}</td>
                            <td>${escapeHtml(formatDisplayNumber(sumLk_over_2))}</td>
                            <td><strong>${escapeHtml(formatDisplayNumber(sumLkComm))}</strong></td>
                        </tr>
                    ` : ""}
                </tbody>
            </table>
        `;
    }

    const report = document.createElement("section");
    report.id = "reportView";
    report.className = "report-view";
    report.innerHTML = `
        <div class="report-metrics">
            <article>
                <span>Doanh số tổng</span>
                <strong>${escapeHtml(formatDisplayNumber(data.totalSales))}</strong>
            </article>
            <article>
                <span>Số lượng bán</span>
                <strong>${escapeHtml(formatDisplayNumber(data.totalQuantity))}</strong>
            </article>
            <article>
                <span>Số lượng SKU bán ra</span>
                <strong>${escapeHtml(formatDisplayNumber(data.totalSku))}</strong>
            </article>
            <article>
                <span>${displayCommissionTitle}</span>
                <strong>${escapeHtml(formatDisplayNumber(displayCommissionValue))}</strong>
            </article>
        </div>
        <div class="report-charts-grid">
            <section class="report-panel lk-npp-chart-panel">
                <div class="chart-panel-header">
                    <h2>Biểu đồ NPP - Lock&amp;King</h2>
                    <span class="chart-badge lk-badge">Lock&amp;King</span>
                </div>
                <div class="sales-chart">
                    ${lkChartSegments.length ? `
                        <div class="sales-pie-layout">
                            <div class="sales-pie" style="background: conic-gradient(${lkChartSegments.map(item => item.segment).join(", ")});">
                                <div class="sales-pie-center">
                                    <span>Tổng L&amp;K</span>
                                    <strong>${escapeHtml(formatDisplayNumber(lkChartTotal))}</strong>
                                </div>
                            </div>
                            <div class="sales-pie-legend">
                                ${lkChartSegments.map(item => `
                                    <div class="sales-pie-legend-item">
                                        <i style="background:${escapeHtml(item.color)}"></i>
                                        <div>
                                            <strong>${escapeHtml(reportNppName(item))}</strong>
                                            <span>${escapeHtml(formatDisplayNumber(item.sales))} (${item.percent.toFixed(1)}%)</span>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    ` : `<div class="report-empty">Chưa có dữ liệu NPP Lock&amp;King.</div>`}
                </div>
            </section>
            <section class="report-panel commission-chart-panel">
                <h2>Tổng tiền theo ngày</h2>
                ${(data.dateRows || []).length
                    ? `<div class="commission-line-chart"><canvas id="commissionLineChart"></canvas></div>`
                    : `<div class="report-empty">Chưa có dữ liệu theo ngày.</div>`}
            </section>
            <section class="report-panel fs-npp-chart-panel">
                <div class="chart-panel-header">
                    <h2>Biểu đồ NPP - Fivestar</h2>
                    <span class="chart-badge fs-badge">Fivestar</span>
                </div>
                <div class="sales-chart">
                    ${fsChartSegments.length ? `
                        <div class="sales-pie-layout">
                            <div class="sales-pie" style="background: conic-gradient(${fsChartSegments.map(item => item.segment).join(", ")});">
                                <div class="sales-pie-center">
                                    <span>Tổng Fivestar</span>
                                    <strong>${escapeHtml(formatDisplayNumber(fsChartTotal))}</strong>
                                </div>
                            </div>
                            <div class="sales-pie-legend">
                                ${fsChartSegments.map(item => `
                                    <div class="sales-pie-legend-item">
                                        <i style="background:${escapeHtml(item.color)}"></i>
                                        <div>
                                            <strong>${escapeHtml(reportNppName(item))}</strong>
                                            <span>${escapeHtml(formatDisplayNumber(item.sales))} (${item.percent.toFixed(1)}%)</span>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    ` : `<div class="report-empty">Chưa có dữ liệu NPP Fivestar.</div>`}
                </div>
            </section>
        </div>
        <div class="report-grid dashboard-report-group">
            <section class="report-panel sales-commission-panel">
                <div class="commission-header-bar">
                    <div class="commission-title-group">
                        <h2>Hoa hồng theo doanh số</h2>
                        <span class="commission-brand-badge">${activeBrand === "ALL" ? "Tổng hợp cả 2 thương hiệu" : (isFivestarBrand(activeBrand) ? `${escapeHtml(activeBrand)} (0.5% &times; Doanh số)` : `${escapeHtml(activeBrand)} (Bậc thang)`)}</span>
                    </div>
                    <div class="commission-brand-filter-pills" role="tablist" aria-label="Lọc thương hiệu tính hoa hồng">
                        <button type="button" class="brand-pill-btn ${activeBrand === 'ALL' ? 'active' : ''}" onclick="selectReportCommissionBrand('ALL')" title="Xem hoa hồng tất cả thương hiệu">
                            <span class="pill-name">Tất cả thương hiệu</span>
                            <span class="pill-val">${escapeHtml(formatDisplayNumber(data.allBrandsTotalSales || data.totalSales))}</span>
                        </button>
                        ${(data.allBrandRows || []).map(b => {
                            const isFs = isFivestarBrand(b.brand);
                            const tag = isFs ? "0.5%" : "Bậc thang";
                            return `
                                <button type="button" class="brand-pill-btn ${activeBrand === b.brand ? 'active' : ''}" onclick="selectReportCommissionBrand('${escapeJsString(b.brand)}')" title="Xem hoa hồng thương hiệu ${escapeHtml(b.brand)} (${tag})">
                                    <span class="pill-name">${escapeHtml(b.brand)}</span>
                                    <span class="pill-val">${escapeHtml(formatDisplayNumber(b.sales))}</span>
                                </button>
                            `;
                        }).join("")}
                    </div>
                </div>
                <div class="report-table-wrap">
                    ${commissionTableHtml}
                </div>
            </section>
            <section class="report-panel collection-performance-panel">
                <h2>T&#7927; l&#7879; thu theo th&aacute;ng</h2>
                <div class="report-table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Th&aacute;ng</th>
                                <th>Doanh s&#7889;</th>
                                <th>N&#7907; &#273;&atilde; thu</th>
                                <th>T&#7881; l&#7879; thu</th>
                                <th>90% doanh s&#7889;</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${monthlyCollectionRows.map(row => `
                                <tr>
                                    <td>${escapeHtml(row.month)}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.sales))}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.collectedDebt))}</td>
                                    <td><strong>${escapeHtml(formatPercent(row.collectionRate))}</strong></td>
                                    <td>${escapeHtml(formatDisplayNumber(row.target90Sales))}</td>
                                </tr>
                            `).join("") || `<tr><td colspan="5">Ch&#432;a c&oacute; d&#7919; li&#7879;u.</td></tr>`}
                            ${monthlyCollectionRows.length ? `
                                <tr class="report-total-row">
                                    <td>T&#7893;ng c&#7897;ng</td>
                                    <td>${escapeHtml(formatDisplayNumber(data.totalSales))}</td>
                                    <td>${escapeHtml(formatDisplayNumber(totalCollectedDebt))}</td>
                                    <td><strong>${escapeHtml(formatPercent(totalCollectionRate))}</strong></td>
                                    <td>${escapeHtml(formatDisplayNumber(totalTarget90Sales))}</td>
                                </tr>
                            ` : ""}
                        </tbody>
                    </table>
                </div>
            </section>
            <section class="report-panel sku-report-panel">
                <h2>SP Bán Chạy</h2>
                <div class="report-table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ID_SP</th>
                                <th>TÊN</th>
                                <th>SLG</th>
                                <th>TIỀN</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${skuPageRows.map(row => `
                                <tr>
                                    <td>${escapeHtml(row.idSp)}</td>
                                    <td>${escapeHtml(row.productName)}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.quantity))}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.sales))}</td>
                                </tr>
                            `).join("") || `<tr><td colspan="4">Chưa có dữ liệu.</td></tr>`}
                        </tbody>
                    </table>
                </div>
                ${(data.skuRows || []).length > skuPageSize ? `
                    <div class="report-table-pagination">
                        <button type="button" class="pagination-btn" onclick="changeReportSkuPage(-1)" ${reportSkuPage === 1 ? "disabled" : ""}>
                            <i data-lucide="chevron-left" style="width:16px;"></i> Trước
                        </button>
                        <div class="page-info">Trang ${reportSkuPage} / ${skuTotalPages} (${(data.skuRows || []).length} dòng)</div>
                        <button type="button" class="pagination-btn" onclick="changeReportSkuPage(1)" ${reportSkuPage === skuTotalPages ? "disabled" : ""}>
                            Tiếp <i data-lucide="chevron-right" style="width:16px;"></i>
                        </button>
                    </div>
                ` : ""}
            </section>
        </div>
    `;
    document.querySelector(".main-content").insertBefore(report, document.getElementById("pagination"));
    if ((data.dateRows || []).length) {
        requestAnimationFrame(() => drawDailySalesChart([...data.dateRows].sort((a, b) => getDateTime(a.ngay) - getDateTime(b.ngay))));
    }
}

function changeReportSkuPage(delta) {
    const totalRows = reportData?.skuRows?.length || 0;
    const totalPages = Math.max(Math.ceil(totalRows / 10), 1);
    reportSkuPage = Math.min(Math.max(reportSkuPage + delta, 1), totalPages);
    renderBaoCao();
}

function drawDailySalesChart(rows) {
    const canvas = document.getElementById("commissionLineChart");
    if (!canvas) return;
    const containerWidth = canvas.parentElement?.clientWidth || 400;
    const cssWidth = Math.max(containerWidth, 320);
    const cssHeight = 280;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(cssWidth * dpr);
    canvas.height = Math.round(cssHeight * dpr);
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    const padding = { top: 40, right: 30, bottom: 44, left: 56 };
    const plotWidth = cssWidth - padding.left - padding.right;
    const plotHeight = cssHeight - padding.top - padding.bottom;
    const salesAxisMax = Math.max(...rows.map(row => row.sales || 0), 1) * 1.1;
    const formatAxis = value => new Intl.NumberFormat("vi-VN", {
        notation: value >= 1000000 ? "compact" : "standard",
        maximumFractionDigits: 1
    }).format(value);

    ctx.font = "600 11px Inter, sans-serif";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = "#e2e8f0";
    ctx.fillStyle = "#64748b";
    ctx.lineWidth = 1;
    for (let step = 0; step <= 5; step += 1) {
        const y = padding.top + (plotHeight / 5) * step;
        const salesValue = salesAxisMax * (1 - step / 5);
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(cssWidth - padding.right, y);
        ctx.stroke();
        ctx.textAlign = "right";
        ctx.fillStyle = "#164e63";
        ctx.fillText(formatAxis(salesValue), padding.left - 9, y);
    }

    const categoryWidth = plotWidth / Math.max(rows.length, 1);
    const xFor = index => padding.left + categoryWidth * (index + 0.5);
    const salesYFor = value => padding.top + plotHeight - ((Number(value) || 0) / salesAxisMax) * plotHeight;

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    rows.forEach((row, index) => {
        const x = xFor(index);
        const label = formatChartDateLabel(row.ngay);
        const maxLabelWidth = Math.max(categoryWidth - 8, 36);
        let compactLabel = label;
        while (compactLabel.length > 3 && ctx.measureText(`${compactLabel}...`).width > maxLabelWidth) {
            compactLabel = compactLabel.slice(0, -1);
        }
        if (compactLabel !== label) compactLabel += "...";
        ctx.fillStyle = "#64748b";
        ctx.fillText(compactLabel, x, padding.top + plotHeight + 10);
    });
    ctx.restore();

    ctx.strokeStyle = "#4285f4";
    ctx.fillStyle = "#4285f4";
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    rows.forEach((row, index) => {
        const x = xFor(index);
        const y = salesYFor(row.sales);
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
    rows.forEach((row, index) => {
        ctx.beginPath();
        ctx.arc(xFor(index), salesYFor(row.sales), 4, 0, Math.PI * 2);
        ctx.fill();
    });

    const legendY = 20;
    ctx.strokeStyle = "#4285f4";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(padding.left, legendY);
    ctx.lineTo(padding.left + 24, legendY);
    ctx.stroke();
    ctx.fillStyle = "#475569";
    ctx.textAlign = "left";
    ctx.fillText("Tổng tiền", padding.left + 31, legendY);
}

function renderCongViecKanban() {
    const board = document.getElementById("kanbanBoard");
    const headers = getHeaders("CONG_VIEC");
    const statusIndex = headers.indexOf("tinh_trang");
    const titleIndex = headers.indexOf("cong_viec");
    const dateIndex = headers.indexOf("ngay");
    const contentIndex = headers.indexOf("noi_dung");
    const noteIndex = headers.indexOf("ghi_chu");
    const stateIndex = headers.indexOf("trang_thai");
    const statuses = getModuleConfig("CONG_VIEC").statusOptions || [];
    board.innerHTML = statuses.map(status => {
        const cards = filteredData.filter(row => String(row[statusIndex] || "").trim().toLowerCase() === status.toLowerCase());
        return `
            <section class="kanban-column">
                <header>
                    <span>${escapeHtml(status)}</span>
                    <strong>${cards.length}</strong>
                </header>
                <div class="kanban-cards" data-kanban-status="${escapeHtml(status)}" ondragover="allowKanbanDrop(event)" ondragleave="clearKanbanDrop(event)" ondrop="dropCongViecCard(event)">
                    ${cards.map(row => {
            const rowIndex = filteredData.indexOf(row);
            return `
                            <article class="kanban-card" draggable="true" data-sheet-row="${row._sheetRow}" ondragstart="dragCongViecCard(event)" ondragend="endCongViecDrag(event)" ondblclick="openRecordForm(${rowIndex})">
                                <h3>${escapeHtml(row[titleIndex] || "Không tên")}</h3>
                                <p>${escapeHtml(row[contentIndex] || "")}</p>
                                <div class="kanban-meta">
                                    <span>${escapeHtml(row[dateIndex] || "")}</span>
                                    <span>${escapeHtml(row[stateIndex] || "")}</span>
                                </div>
                                ${row[noteIndex] ? `<small>${escapeHtml(row[noteIndex])}</small>` : ""}
                            </article>
                        `;
        }).join("") || `<div class="kanban-empty">Không có việc</div>`}
                </div>
            </section>
        `;
    }).join("");
}

function renderPagination() {
    if (getModuleConfig().reportOnly) {
        document.getElementById("pagination").innerHTML = "";
        return;
    }
    const totalRows = getCurrentDisplayRowCount();
    if (currentModule === "CONG_VIEC" && congViecView === "kanban") {
        document.getElementById("pagination").innerHTML = "";
        return;
    }
    const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
    const pagination = document.getElementById("pagination");
    if (totalRows <= rowsPerPage) {
        pagination.innerHTML = "";
        return;
    }
    pagination.innerHTML = `
        <button class="pagination-btn" onclick="changePage(-1)" ${currentPage === 1 ? "disabled" : ""}>
            <i data-lucide="chevron-left" style="width:16px;"></i> Trước
        </button>
        <div class="page-info">Trang ${currentPage} / ${totalPages} (${totalRows} dòng)</div>
        <button class="pagination-btn" onclick="changePage(1)" ${currentPage === totalPages ? "disabled" : ""}>
            Tiếp <i data-lucide="chevron-right" style="width:16px;"></i>
        </button>
    `;
    safeCreateIcons();
}

function changePage(delta) {
    const totalRows = getCurrentDisplayRowCount();
    const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
    currentPage = Math.min(Math.max(currentPage + delta, 1), totalPages);
    renderTable();
    document.querySelector(".table-wrapper")?.scrollTo({ top: 0 });
}

function filterTable() {
    clearSelectedRows();
    applyCurrentFilters();
    currentPage = 1;
    renderTable();
}

function dragCongViecCard(event) {
    const card = event.currentTarget;
    card.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", card.dataset.sheetRow || "");
}

function endCongViecDrag(event) {
    event.currentTarget.classList.remove("dragging");
    document.querySelectorAll(".kanban-cards.drag-over").forEach(item => item.classList.remove("drag-over"));
}

function allowKanbanDrop(event) {
    event.preventDefault();
    event.currentTarget.classList.add("drag-over");
    event.dataTransfer.dropEffect = "move";
}

function clearKanbanDrop(event) {
    event.currentTarget.classList.remove("drag-over");
}

async function dropCongViecCard(event) {
    event.preventDefault();
    const target = event.currentTarget;
    target.classList.remove("drag-over");
    const sheetRow = Number(event.dataTransfer.getData("text/plain"));
    const nextStatus = String(target.dataset.kanbanStatus || "").trim();
    if (!sheetRow || !nextStatus) return;

    const row = allData.find(item => item._sheetRow === sheetRow);
    if (!row) return;
    const statusIndex = getHeaderIndex("tinh_trang", "CONG_VIEC");
    if (String(row[statusIndex] || "").trim().toLowerCase() === nextStatus.toLowerCase()) return;

    const updatedRow = [...row];
    updatedRow[statusIndex] = nextStatus;
    showLoading("Đang cập nhật tình trạng công việc...");
    try {
        await writeRecordRow(updatedRow, sheetRow);
        row[statusIndex] = nextStatus;
        applyCurrentFilters();
        renderTable();
    } catch (err) {
        console.error(err);
        alert("Không cập nhật được tình trạng công việc: " + err.message);
    } finally {
        hideLoading();
    }
}

async function writeRecordRow(row, sheetRow) {
    const headers = getHeaders();
    const endCol = colName(headers.length - 1);
    const range = `${quoteSheetName(currentModule)}!A${sheetRow}:${endCol}${sheetRow}`;
    await sheetsFetch(`/values/${encodeURIComponent(range)}?valueInputOption=RAW`, {
        method: "PUT",
        body: JSON.stringify({ values: [normalizeRow(row)] })
    });
}

async function updateDonHangProductId(oldId, newId) {
    const fromId = String(oldId || "").trim();
    const toId = String(newId || "").trim();
    if (!fromId || !toId || fromId === toId) return 0;
    const headers = getHeaders("DON_HANG");
    const idSpIndex = headers.indexOf("id_sp");
    if (idSpIndex < 0) return 0;
    const rows = await loadModuleRows("DON_HANG");
    const col = colName(idSpIndex);
    const updates = rows
        .filter(row => String(row[idSpIndex] || "").trim() === fromId)
        .map(row => ({
            range: `${quoteSheetName("DON_HANG")}!${col}${row._sheetRow}`,
            values: [[toId]]
        }));
    if (!updates.length) return 0;
    await sheetsFetch("/values:batchUpdate?valueInputOption=RAW", {
        method: "POST",
        body: JSON.stringify({ data: updates })
    });
    return updates.length;
}

async function appendRecordRows(rows) {
    const range = `${quoteSheetName(currentModule)}!A2`;
    await sheetsFetch(`/values/${encodeURIComponent(range)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
        method: "POST",
        body: JSON.stringify({ values: rows.map(normalizeRow) })
    });
}

async function deleteRecordRow(sheetRow) {
    const sheet = spreadsheetSheets.get(currentModule);
    if (!sheet) throw new Error(`Không tìm thấy sheet ${currentModule}.`);
    const rowNum = Number(sheetRow);
    if (!rowNum || rowNum < 2) throw new Error("Không xác định được dòng cần xóa.");
    await batchUpdate([{
        deleteDimension: {
            range: {
                sheetId: sheet.sheetId,
                dimension: "ROWS",
                startIndex: rowNum - 1,
                endIndex: rowNum
            }
        }
    }]);
}

async function deleteRecordRows(sheetRows) {
    const sheet = spreadsheetSheets.get(currentModule);
    if (!sheet) throw new Error(`Không tìm thấy sheet ${currentModule}.`);
    const rows = [...new Set(sheetRows.map(Number).filter(row => row >= 2))].sort((a, b) => b - a);
    if (!rows.length) return;
    await batchUpdate(rows.map(rowNum => ({
        deleteDimension: {
            range: {
                sheetId: sheet.sheetId,
                dimension: "ROWS",
                startIndex: rowNum - 1,
                endIndex: rowNum
            }
        }
    })));
}

async function deleteSelectedRows() {
    if (!canBulkSelectRows() || !selectedSheetRows.size) return;
    const rows = [...selectedSheetRows];
    if (!confirm(`Xóa ${rows.length} dòng đã chọn khỏi module ${getModuleConfig().label}?`)) return;
    showLoading("Đang xóa dữ liệu...");
    try {
        await deleteRecordRows(rows);
        clearSelectedRows();
        await fetchData();
    } catch (err) {
        console.error(err);
        alert("Không xóa được dữ liệu: " + err.message);
    } finally {
        hideLoading();
    }
}

const CORE_DON_HANG_HEADERS = ["id", "ngay", "mdh", "npp", "id_sp", "ten", "don_gia", "slg", "thanh_tien", "chiet_khau", "tien_chiet_khau", "tien_hang"];

function getExtraDonHangHeaders() {
    return getHeaders("DON_HANG").filter(h => !CORE_DON_HANG_HEADERS.includes(h));
}

function renderDonHangForm(rows = []) {
    const headers = getHeaders("DON_HANG");
    const extraHeaders = getExtraDonHangHeaders();
    const ngayIndex = headers.indexOf("ngay");
    const mdhIndex = headers.indexOf("mdh");
    const nppIndex = headers.indexOf("npp");
    const today = new Date().toISOString().slice(0, 10);
    const ngay = rows[0]?.[ngayIndex] || today;
    const mdh = rows[0]?.[mdhIndex] || randomCode(10);
    const npp = rows[0]?.[nppIndex] || "";
    currentDonHangMdh = rows.length ? mdh : "";
    const itemRows = rows.length ? rows : [headers.map(h => h === "id" ? generateNextId() : (h === "ngay" ? ngay : (h === "mdh" ? mdh : (h === "npp" ? npp : ""))))];
    const productOptions = dsSpOptions
        .map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.ten)}</option>`)
        .join("");
    const nppSelectOptions = nppOptions
        .map(item => `<option value="${escapeHtml(item.id)}" ${item.id === npp ? "selected" : ""}>${escapeHtml(item.id)}${item.ten ? ` - ${escapeHtml(item.ten)}` : ""}</option>`)
        .join("");

    document.getElementById("formFields").innerHTML = `
        <section class="order-common-fields">
            <label>
                <span>${escapeHtml(getHeaderLabel("ngay", "DON_HANG"))}</span>
                <input id="donHangNgay" type="date" value="${escapeHtml(ngay)}">
            </label>
            <label>
                <span>${escapeHtml(getHeaderLabel("mdh", "DON_HANG"))}</span>
                <div class="inline-field">
                    <input id="donHangMdh" type="text" value="${escapeHtml(mdh)}">
                    <button type="button" class="secondary-btn compact-btn" onclick="generateQuickMdh()">Tạo MDH</button>
                </div>
            </label>
            <label>
                <span>${escapeHtml(getHeaderLabel("npp", "DON_HANG"))}</span>
                <select id="donHangNpp">
                    <option value=""></option>
                    ${nppSelectOptions}
                </select>
            </label>
        </section>
        <datalist id="dsSpOptions">${productOptions}</datalist>
        <section class="order-items-panel">
            <div class="order-items-head">
                <h3>Sản phẩm</h3>
                <button type="button" class="secondary-btn compact-btn" onclick="addDonHangItem()">Thêm sản phẩm</button>
            </div>
            <div class="order-items-wrapper">
                <table class="order-items-table">
                    <thead>
                        <tr>
                            <th>${escapeHtml(getHeaderLabel("id_sp", "DON_HANG"))}</th>
                            <th>${escapeHtml(getHeaderLabel("ten", "DON_HANG"))}</th>
                            <th>${escapeHtml(getHeaderLabel("don_gia", "DON_HANG"))}</th>
                            <th>${escapeHtml(getHeaderLabel("slg", "DON_HANG"))}</th>
                            <th>${escapeHtml(getHeaderLabel("thanh_tien", "DON_HANG"))}</th>
                            <th>${escapeHtml(getHeaderLabel("chiet_khau", "DON_HANG"))} (%)</th>
                            <th>${escapeHtml(getHeaderLabel("tien_chiet_khau", "DON_HANG"))}</th>
                            <th>${escapeHtml(getHeaderLabel("tien_hang", "DON_HANG"))}</th>
                            ${extraHeaders.map(h => `<th>${escapeHtml(getHeaderLabel(h, "DON_HANG"))}</th>`).join("")}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="donHangItemsBody"></tbody>
                </table>
            </div>
            <div class="order-total">Tổng tiền: <strong id="donHangTotal">0</strong></div>
        </section>
    `;
    document.getElementById("donHangItemsBody").innerHTML = itemRows.map((row, index) => renderDonHangItemRow(row, index)).join("");
    recalculateDonHangItems();
}

function renderDonHangItemRow(row, index) {
    const headers = getHeaders("DON_HANG");
    const extraHeaders = getExtraDonHangHeaders();
    const idIndex = headers.indexOf("id");
    const idSpIndex = headers.indexOf("id_sp");
    const tenIndex = headers.indexOf("ten");
    const donGiaIndex = headers.indexOf("don_gia");
    const slgIndex = headers.indexOf("slg");
    const thanhTienIndex = headers.indexOf("thanh_tien");
    const chietKhauIndex = headers.indexOf("chiet_khau");
    const tienChietKhauIndex = headers.indexOf("tien_chiet_khau");
    const tienHangIndex = headers.indexOf("tien_hang");
    return `
        <tr data-order-item="${index}">
            <td>
                <input type="hidden" data-order-field="id" value="${escapeHtml(row[idIndex] || generateNextId())}">
                <input data-order-field="id_sp" type="text" list="dsSpOptions" value="${escapeHtml(row[idSpIndex] || "")}" oninput="updateDonHangProduct(this)">
            </td>
            <td><input data-order-field="ten" type="text" value="${escapeHtml(row[tenIndex] || "")}" readonly></td>
            <td><input data-order-field="don_gia" type="text" value="${escapeHtml(formatDisplayNumber(row[donGiaIndex]) || "")}" readonly></td>
            <td><input data-order-field="slg" type="text" value="${escapeHtml(row[slgIndex] || "")}" oninput="recalculateDonHangItems(this)"></td>
            <td><input data-order-field="thanh_tien" type="text" value="${escapeHtml(formatDisplayNumber(row[thanhTienIndex]) || "")}" readonly></td>
            <td><input data-order-field="chiet_khau" type="text" value="${escapeHtml(row[chietKhauIndex] || "")}" oninput="recalculateDonHangItems(this)" placeholder="%"></td>
            <td><input data-order-field="tien_chiet_khau" type="text" value="${escapeHtml(formatDisplayNumber(row[tienChietKhauIndex]) || "")}" oninput="recalculateDonHangItems(this)" onblur="this.value = formatDisplayNumber(this.value) || ''"></td>
            <td><input data-order-field="tien_hang" type="text" value="${escapeHtml(formatDisplayNumber(row[tienHangIndex]) || "")}" readonly></td>
            ${extraHeaders.map(h => {
                const hIdx = headers.indexOf(h);
                const hType = getColumnType(h, "DON_HANG") === "date" ? "date" : "text";
                return `<td><input data-order-field="${escapeHtml(h)}" type="${hType}" value="${escapeHtml(row[hIdx] || "")}"></td>`;
            }).join("")}
            <td><button type="button" class="icon-btn" onclick="removeDonHangItem(this)" title="Xóa sản phẩm"><i data-lucide="trash-2" style="width:16px;"></i></button></td>
        </tr>
    `;
}

async function openDonHangForm(mdh = null) {
    await Promise.all([loadDsSpOptions(), loadNppOptions()]);
    const mdhIndex = getHeaderIndex("mdh", "DON_HANG");
    const rows = mdh ? allData.filter(row => String(row[mdhIndex] || "").trim() === mdh) : [];
    document.getElementById("editingSheetRow").value = rows.map(row => row._sheetRow).join(",");
    document.getElementById("productModalTitle").innerText = rows.length ? `Sửa đơn hàng ${mdh}` : "Thêm mới Đơn hàng";
    document.getElementById("deleteBtn").style.display = rows.length ? "inline-flex" : "none";
    renderDonHangForm(rows);
    document.getElementById("productModal").classList.add("active");
    document.getElementById("donHangMdh")?.focus();
    safeCreateIcons();
}

function generateQuickMdh() {
    const input = document.getElementById("donHangMdh");
    if (input) input.value = randomCode(10);
}

function addDonHangItem() {
    const body = document.getElementById("donHangItemsBody");
    const index = body.querySelectorAll("tr").length;
    body.insertAdjacentHTML("beforeend", renderDonHangItemRow([], index));
    safeCreateIcons();
}

function removeDonHangItem(button) {
    const row = button.closest("tr");
    if (row && document.querySelectorAll("#donHangItemsBody tr").length > 1) row.remove();
    recalculateDonHangItems();
}

function updateDonHangProduct(input) {
    const product = getDsSpById(input.value);
    const row = input.closest("tr");
    if (!row) return;
    row.querySelector('[data-order-field="ten"]').value = product?.ten || "";
    row.querySelector('[data-order-field="don_gia"]').value = product?.gia ? formatDisplayNumber(product.gia) : "";
    recalculateDonHangItems();
}

function recalculateDonHangItems(triggerInput = null) {
    let total = 0;
    document.querySelectorAll("#donHangItemsBody tr").forEach(row => {
        const donGiaInput = row.querySelector('[data-order-field="don_gia"]');
        const slgInput = row.querySelector('[data-order-field="slg"]');
        const thanhTienInput = row.querySelector('[data-order-field="thanh_tien"]');
        const chietKhauInput = row.querySelector('[data-order-field="chiet_khau"]');
        const tienChietKhauInput = row.querySelector('[data-order-field="tien_chiet_khau"]');
        const tienHangInput = row.querySelector('[data-order-field="tien_hang"]');
        
        const lineThanhTien = Math.round(parseMoney(donGiaInput?.value) * parseMoney(slgInput?.value) * 100) / 100;
        if (thanhTienInput) thanhTienInput.value = formatDisplayNumber(lineThanhTien) || "";
        
        let chietKhauPercent = parseMoney(chietKhauInput?.value);
        let tienChietKhau = parseMoney(tienChietKhauInput?.value);
        
        if (triggerInput && triggerInput === chietKhauInput) {
            if (chietKhauInput.value.trim() === "") {
                tienChietKhau = 0;
                if (tienChietKhauInput) tienChietKhauInput.value = "";
            } else {
                tienChietKhau = Math.round(lineThanhTien * (chietKhauPercent / 100) * 100) / 100;
                if (tienChietKhauInput) tienChietKhauInput.value = formatDisplayNumber(tienChietKhau) || "0";
            }
        } else if (triggerInput && triggerInput === tienChietKhauInput) {
            if (tienChietKhauInput.value.trim() === "") {
                chietKhauPercent = 0;
                if (chietKhauInput) chietKhauInput.value = "";
            } else {
                chietKhauPercent = lineThanhTien ? Math.round((tienChietKhau / lineThanhTien) * 100 * 100) / 100 : 0;
                if (chietKhauInput) chietKhauInput.value = chietKhauPercent || 0;
            }
        } else {
            if (chietKhauInput && chietKhauInput.value.trim() !== "") {
                tienChietKhau = Math.round(lineThanhTien * (chietKhauPercent / 100) * 100) / 100;
                if (tienChietKhauInput) tienChietKhauInput.value = formatDisplayNumber(tienChietKhau) || "0";
            } else if (tienChietKhauInput && tienChietKhauInput.value.trim() !== "") {
                chietKhauPercent = lineThanhTien ? Math.round((tienChietKhau / lineThanhTien) * 100 * 100) / 100 : 0;
                if (chietKhauInput) chietKhauInput.value = chietKhauPercent || 0;
                if (tienChietKhauInput) tienChietKhauInput.value = formatDisplayNumber(tienChietKhau) || "0";
            } else {
                tienChietKhau = 0;
            }
        }
        
        const lineTienHang = Math.round((lineThanhTien - tienChietKhau) * 100) / 100;
        if (tienHangInput) tienHangInput.value = formatDisplayNumber(lineTienHang) || "";
        total += lineTienHang || 0;
    });
    const totalEl = document.getElementById("donHangTotal");
    if (totalEl) totalEl.innerText = formatDisplayNumber(total);
}

function renderOptionButtons(fieldId, value, options) {
    return `
        <div class="option-buttons" data-option-field="${escapeHtml(fieldId)}">
            <input id="${escapeHtml(fieldId)}" type="hidden" value="${escapeHtml(value)}">
            ${options.map(option => `<button type="button" class="${String(value).toLowerCase() === option.toLowerCase() ? "active" : ""}" onclick="setOptionButtonValue(this, '${escapeJsString(option)}')">${escapeHtml(option)}</button>`).join("")}
        </div>
    `;
}

function setOptionButtonValue(button, value) {
    const group = button.closest(".option-buttons");
    if (!group) return;
    const input = group.querySelector("input");
    if (input) input.value = value;
    group.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
}

function renderFormFields(row = null) {
    const container = document.getElementById("formFields");
    const statusOptions = getModuleConfig().statusOptions || [];
    const brands = currentModule === "DS_SP" ? getDsSpBrandOptions() : [];
    const brandDatalist = brands.length
        ? `<datalist id="dsSpBrandList">${brands.map(b => `<option value="${escapeHtml(b)}"></option>`).join("")}</datalist>`
        : "";
    container.innerHTML = brandDatalist + getHeaders().map((header, index) => {
        const colType = getColumnType(header, currentModule);
        const rawValue = row?.[index] ?? (header === "id" ? generateNextId() : (colType === "date" ? new Date().toISOString().slice(0, 10) : ""));
        const value = escapeHtml(rawValue);
        const labelText = escapeHtml(getHeaderLabel(header, currentModule));
        if (header === "id") {
            const readonly = row && currentModule !== "DS_SP" ? "readonly" : "";
            return `<label><span>${labelText}</span><input id="formField_${index}" type="text" value="${value}" ${readonly}></label>`;
        }
        if ((currentModule === "CONG_VIEC" && header === "tinh_trang") || (currentModule === "CONG_NO" && header === "truong")) {
            const optionValue = currentModule === "CONG_NO" && !rawValue ? "THU" : rawValue;
            return `<label class="wide-field"><span>${labelText}</span>${renderOptionButtons(`formField_${index}`, optionValue, statusOptions)}</label>`;
        }
        if (currentModule === "CONG_NO" && header === "npp") {
            return `<label><span>${labelText}</span><select id="formField_${index}">
                <option value=""></option>
                ${nppOptions.map(item => `<option value="${escapeHtml(item.id)}" ${String(rawValue) === item.id ? "selected" : ""}>${escapeHtml(item.id)}${item.ten ? ` - ${escapeHtml(item.ten)}` : ""}</option>`).join("")}
            </select></label>`;
        }
        if (isTextareaHeader(header, currentModule)) {
            return `<label class="wide-field"><span>${labelText}</span><textarea id="formField_${index}" rows="4">${value}</textarea></label>`;
        }
        if (currentModule === "NPP" && header === "hoa_hong") {
            return `<label><span>${labelText} (%)</span><input id="formField_${index}" type="number" min="0.001" max="100" step="0.001" value="${value}"></label>`;
        }
        if (currentModule === "CONG_NO" && header === "so_tien") {
            return `<label><span>${labelText}</span><input id="formField_${index}" type="number" min="0" step="1" value="${value}"></label>`;
        }
        if (currentModule === "DS_SP" && header === "thuong_hieu") {
            return `<label><span>${labelText}</span><input id="formField_${index}" type="text" list="dsSpBrandList" value="${value}" placeholder="Nhập hoặc chọn thương hiệu..."></label>`;
        }
        const type = colType === "date" ? "date" : "text";
        const readonly = (currentModule === "DON_HANG" && header === "thanh_tien") || (currentModule === "CONG_NO" && header === "cong_no_con_lai") ? "readonly" : "";
        return `<label><span>${labelText}</span><input id="formField_${index}" type="${type}" value="${value}" ${readonly}></label>`;
    }).join("");
}

function recalculateDonHangForm() {
    if (currentModule !== "DON_HANG") return;
    const headers = getHeaders();
    const donGiaIndex = headers.indexOf("don_gia");
    const slgIndex = headers.indexOf("slg");
    const thanhTienIndex = headers.indexOf("thanh_tien");
    if (donGiaIndex < 0 || slgIndex < 0 || thanhTienIndex < 0) return;
    const donGia = parseMoney(document.getElementById(`formField_${donGiaIndex}`)?.value);
    const slg = parseMoney(document.getElementById(`formField_${slgIndex}`)?.value);
    const input = document.getElementById(`formField_${thanhTienIndex}`);
    if (input) input.value = donGia && slg ? String(Math.round(donGia * slg * 100) / 100) : "";
}

async function openRecordForm(rowIndex = null) {
    if (currentModule === "DON_HANG") {
        await openDonHangForm(null);
        return;
    }
    if (currentModule === "CONG_NO") await loadNppOptions();
    const row = rowIndex === null ? null : filteredData[rowIndex];
    document.getElementById("editingSheetRow").value = row?._sheetRow || "";
    document.getElementById("productModalTitle").innerText = row
        ? `Sửa ${getModuleConfig().label}`
        : `Thêm mới ${getModuleConfig().label}`;
    document.getElementById("deleteBtn").style.display = row ? "inline-flex" : "none";
    renderFormFields(row);
    document.getElementById("formFields").oninput = recalculateDonHangForm;
    recalculateDonHangForm();
    document.getElementById("productModal").classList.add("active");
    document.getElementById("formField_1")?.focus();
}

function closeProductForm() {
    document.getElementById("productModal").classList.remove("active");
    document.getElementById("formFields").oninput = null;
}

async function saveRecordFromForm(event) {
    event.preventDefault();
    if (currentModule === "DON_HANG") {
        await saveDonHangForm();
        return;
    }
    recalculateDonHangForm();
    let row = getHeaders().map((_, index) => document.getElementById(`formField_${index}`)?.value.trim() || "");
    if (currentModule === "NPP") {
        const commissionIndex = getHeaderIndex("hoa_hong", "NPP");
        if (commissionIndex >= 0 && row[commissionIndex]) {
            row[commissionIndex] = clampCommissionPercent(row[commissionIndex]);
        }
    }
    if (currentModule === "CONG_NO") {
        const balanceIndex = getHeaderIndex("cong_no_con_lai", "CONG_NO");
        if (balanceIndex >= 0) row[balanceIndex] = "";
    }
    if (!row[0]) row[0] = generateNextId();

    const editingSheetRow = Number(document.getElementById("editingSheetRow").value);
    const oldRow = editingSheetRow ? allData.find(item => Number(item._sheetRow) === editingSheetRow) : null;
    const oldDsSpId = currentModule === "DS_SP" ? getRowId(oldRow) : "";
    const existing = allData.find(item => getRowId(item) === row[0] && Number(item._sheetRow) !== editingSheetRow);
    if (existing) {
        alert(`ID "${row[0]}" đã tồn tại trong module ${currentModule}.`);
        return;
    }

    showLoading("Đang lưu dữ liệu...");
    try {
        if (editingSheetRow) {
            await writeRecordRow(row, editingSheetRow);
        } else {
            await appendRecordRows([row]);
        }
        if (currentModule === "DS_SP" && editingSheetRow && oldDsSpId && oldDsSpId !== row[0]) {
            await updateDonHangProductId(oldDsSpId, row[0]);
        }
        closeProductForm();
        await fetchData();
        filterTable();
    } catch (err) {
        console.error(err);
        alert("Không lưu được dữ liệu: " + err.message);
    } finally {
        hideLoading();
    }
}

async function saveDonHangForm() {
    recalculateDonHangItems();
    const ngay = String(document.getElementById("donHangNgay")?.value || "").trim();
    const mdh = String(document.getElementById("donHangMdh")?.value || "").trim();
    const npp = String(document.getElementById("donHangNpp")?.value || "").trim();
    if (!ngay) {
        alert("Vui lòng chọn ngày.");
        return;
    }
    if (!mdh) {
        alert("Vui lòng nhập MDH.");
        return;
    }
    if (!npp) {
        alert("Vui lòng chọn NPP.");
        return;
    }

    const headers = getHeaders("DON_HANG");
    const idSpIdx = headers.indexOf("id_sp");
    const slgIdx = headers.indexOf("slg");
    const rows = [...document.querySelectorAll("#donHangItemsBody tr")].map(item => {
        const fieldVal = name => String(item.querySelector(`[data-order-field="${name}"]`)?.value || "").trim();
        return headers.map(h => {
            if (h === "id") return fieldVal("id") || generateNextId();
            if (h === "ngay") return ngay;
            if (h === "mdh") return mdh;
            if (h === "npp") return npp;
            return fieldVal(h);
        });
    }).filter(row => row[idSpIdx] && parseMoney(row[slgIdx]) > 0);

    if (!rows.length) {
        alert("Vui lòng thêm ít nhất một sản phẩm và nhập số lượng.");
        return;
    }

    const oldRows = document.getElementById("editingSheetRow").value
        .split(",")
        .map(value => Number(value))
        .filter(Boolean);

    showLoading("Đang lưu đơn hàng...");
    try {
        if (oldRows.length) await deleteRecordRows(oldRows);
        await appendRecordRows(rows);
        closeProductForm();
        await fetchData();
        filterTable();
    } catch (err) {
        console.error(err);
        alert("Không lưu được đơn hàng: " + err.message);
    } finally {
        hideLoading();
    }
}

async function deleteCurrentRecord() {
    if (currentModule === "DON_HANG") {
        const sheetRows = document.getElementById("editingSheetRow").value
            .split(",")
            .map(value => Number(value))
            .filter(Boolean);
        if (!sheetRows.length) return;
        if (!confirm(`Xóa đơn hàng ${currentDonHangMdh || ""}?`)) return;
        showLoading("Đang xóa đơn hàng...");
        try {
            await deleteRecordRows(sheetRows);
            closeProductForm();
            await fetchData();
            filterTable();
        } catch (err) {
            console.error(err);
            alert("Không xóa được đơn hàng: " + err.message);
        } finally {
            hideLoading();
        }
        return;
    }
    const sheetRow = Number(document.getElementById("editingSheetRow").value);
    if (!sheetRow) return;
    if (!confirm(`Xóa dòng này khỏi module ${currentModule}?`)) return;
    showLoading("Đang xóa dữ liệu...");
    try {
        await deleteRecordRow(sheetRow);
        closeProductForm();
        await fetchData();
        filterTable();
    } catch (err) {
        console.error(err);
        alert("Không xóa được dữ liệu: " + err.message);
    } finally {
        hideLoading();
    }
}

function readExcelRows(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = event => {
            try {
                const workbook = XLSX.read(new Uint8Array(event.target.result), { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
                const firstRow = rows[0] || [];
                const currentHeaders = getHeaders().map(header => header.toLowerCase());
                const fileHeaders = firstRow.map(cell => String(cell || "").trim().toLowerCase());
                const hasHeader = currentHeaders.some(header => fileHeaders.includes(header));
                resolve(hasHeader ? rows.slice(1) : rows);
            } catch (err) {
                reject(err);
            }
        };
        reader.onerror = () => reject(new Error(`Không thể đọc file ${file.name}`));
        reader.readAsArrayBuffer(file);
    });
}

async function handleFileUpload(event) {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    await processFiles(files);
    event.target.value = "";
}

async function processFiles(files) {
    const excelFiles = files.filter(file => /\.(xlsx|xls|csv)$/i.test(file.name));
    if (!excelFiles.length) {
        alert("Vui lòng tải lên file Excel hoặc CSV.");
        return;
    }
    if (!confirm(`Thêm dữ liệu từ ${excelFiles.length} file vào module ${currentModule}?`)) return;

    showLoading("Đang xử lý file và cập nhật Google Sheets...");
    try {
        const rowsFromFiles = await Promise.all(excelFiles.map(readExcelRows));
        const generatedIds = [];
        const rows = rowsFromFiles
            .flat()
            .map(row => getHeaders().map((_, index) => row[index] ?? ""))
            .filter(row => row.some(cell => String(cell || "").trim()))
            .map(row => {
                if (!String(row[0] || "").trim()) {
                    row[0] = generateNextId(generatedIds);
                    generatedIds.push(row[0]);
                }
                return row;
            });
        if (!rows.length) throw new Error("Không có dòng dữ liệu hợp lệ để tải lên.");
        await appendRecordRows(rows);
        await fetchData();
        filterTable();
        alert(`Đã thêm ${rows.length} dòng vào module ${currentModule}.`);
    } catch (err) {
        console.error(err);
        alert("Lỗi khi tải dữ liệu: " + err.message);
    } finally {
        hideLoading();
    }
}

function slugifyColumnKey(text) {
    return String(text || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "d")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");
}

function getCustomizableModules() {
    return MODULE_ORDER.filter(m => CONFIG.modules[m] && !CONFIG.modules[m].hidden && !CONFIG.modules[m].reportOnly);
}

function openColumnConfigModal(targetModule = null, focusHeader = null) {
    const customizable = getCustomizableModules();
    const initialMod = targetModule && customizable.includes(targetModule)
        ? targetModule
        : (customizable.includes(currentModule) ? currentModule : "DS_SP");
    columnConfigEditingModule = initialMod;

    const selectEl = document.getElementById("columnConfigModuleSelect");
    if (selectEl) {
        selectEl.innerHTML = customizable.map(m => `
            <option value="${escapeHtml(m)}" ${m === initialMod ? "selected" : ""}>Module: ${escapeHtml(CONFIG.modules[m].label)}</option>
        `).join("");
    }
    renderColumnConfigTable(initialMod, focusHeader);
    document.getElementById("columnConfigModal").classList.add("active");
    safeCreateIcons();
}

function switchColumnConfigModule(moduleName) {
    columnConfigEditingModule = moduleName;
    renderColumnConfigTable(moduleName);
    safeCreateIcons();
}

let draggedColConfigRow = null;

function onColConfigRowMouseDown(event, tr) {
    if (event.target.closest("input, select, button, textarea")) {
        tr.draggable = false;
    } else {
        tr.draggable = true;
    }
}

function onColConfigDragStart(event, tr) {
    if (!tr.draggable) {
        event.preventDefault();
        return;
    }
    draggedColConfigRow = tr;
    tr.classList.add("col-config-dragging");
    if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        try {
            event.dataTransfer.setData("text/plain", tr.dataset.origKey || "");
        } catch (_) { }
    }
}

function onColConfigDragOver(event, tr) {
    event.preventDefault();
    if (!draggedColConfigRow || draggedColConfigRow === tr) return;
    const tbody = tr.parentElement;
    if (!tbody) return;
    const rect = tr.getBoundingClientRect();
    const isAfter = (event.clientY - rect.top) > rect.height / 2;
    if (isAfter) {
        tbody.insertBefore(draggedColConfigRow, tr.nextElementSibling);
    } else {
        tbody.insertBefore(draggedColConfigRow, tr);
    }
}

function onColConfigDrop(event) {
    event.preventDefault();
}

function onColConfigDragEnd(event, tr) {
    tr.classList.remove("col-config-dragging");
    tr.draggable = false;
    draggedColConfigRow = null;
}

function setColumnAlignValue(btn, alignVal) {
    const group = btn.closest(".col-align-group");
    if (!group) return;
    group.dataset.alignValue = alignVal;
    group.querySelectorAll(".col-align-btn").forEach(b => b.classList.toggle("active", b === btn));
}

function renderColumnConfigRowHtml(item) {
    const { key, origKey, label, type, width, align = "left", visible, lockedKey, virtualOnly } = item;
    return `
        <tr data-orig-key="${escapeHtml(origKey || "")}" data-virtual="${virtualOnly ? "1" : "0"}"
            onmousedown="onColConfigRowMouseDown(event, this)"
            ondragstart="onColConfigDragStart(event, this)"
            ondragover="onColConfigDragOver(event, this)"
            ondrop="onColConfigDrop(event, this)"
            ondragend="onColConfigDragEnd(event, this)">
            <td style="text-align:center;">
                <span class="col-drag-handle" title="Kéo thả lên/xuống để sắp xếp vị trí cột">
                    <i data-lucide="grip-vertical" style="width:16px;"></i>
                </span>
            </td>
            <td style="text-align:center;">
                <input type="checkbox" data-col-field="visible" ${visible ? "checked" : ""}>
            </td>
            <td>
                <input type="text" data-col-field="key" value="${escapeHtml(key)}" ${lockedKey || virtualOnly ? "readonly" : ""} placeholder="vd: thuong_hieu" required>
            </td>
            <td>
                <input type="text" data-col-field="label" value="${escapeHtml(label)}" placeholder="Tên hiển thị..." oninput="onColumnLabelInput(this)">
            </td>
            <td>
                <select data-col-field="type" ${virtualOnly ? "disabled" : ""}>
                    <option value="text" ${type === "text" ? "selected" : ""}>Văn bản (Text)</option>
                    <option value="number" ${type === "number" ? "selected" : ""}>Số / Tiền tệ</option>
                    <option value="date" ${type === "date" ? "selected" : ""}>Ngày tháng</option>
                    <option value="textarea" ${type === "textarea" ? "selected" : ""}>Đoạn văn dài</option>
                </select>
            </td>
            <td>
                <input type="number" data-col-field="width" value="${width ? escapeHtml(width) : ""}" min="50" max="1200" step="5" placeholder="Tự động">
            </td>
            <td style="text-align:center;">
                <div class="col-align-group" data-col-field="align" data-align-value="${escapeHtml(align)}">
                    <button type="button" class="col-align-btn ${align === "left" ? "active" : ""}" onclick="setColumnAlignValue(this, 'left')" title="Căn trái">
                        <i data-lucide="align-left" style="width:15px;"></i>
                    </button>
                    <button type="button" class="col-align-btn ${align === "center" ? "active" : ""}" onclick="setColumnAlignValue(this, 'center')" title="Căn giữa">
                        <i data-lucide="align-center" style="width:15px;"></i>
                    </button>
                    <button type="button" class="col-align-btn ${align === "right" ? "active" : ""}" onclick="setColumnAlignValue(this, 'right')" title="Căn phải">
                        <i data-lucide="align-right" style="width:15px;"></i>
                    </button>
                </div>
            </td>
            <td>
                <div class="column-config-row-actions">
                    <button type="button" class="icon-btn" onclick="moveColumnConfigRow(this, -1)" title="Chuyển lên">
                        <i data-lucide="arrow-up" style="width:15px;"></i>
                    </button>
                    <button type="button" class="icon-btn" onclick="moveColumnConfigRow(this, 1)" title="Chuyển xuống">
                        <i data-lucide="arrow-down" style="width:15px;"></i>
                    </button>
                    <button type="button" class="icon-btn" onclick="removeColumnConfigRow(this)" title="${lockedKey || virtualOnly ? "Cột mặc định hệ thống" : "Xóa cột"}" ${lockedKey || virtualOnly ? "disabled style='opacity:0.35;cursor:not-allowed;'" : ""}>
                        <i data-lucide="trash-2" style="width:15px;"></i>
                    </button>
                </div>
            </td>
        </tr>
    `;
}

function renderColumnConfigTable(moduleName, focusHeader = null) {
    const colCfg = getModuleColumnConfig(moduleName);
    const hiddenSet = new Set(colCfg.hiddenHeaders);
    const rows = colCfg.headers.map(h => ({
        key: h,
        origKey: h,
        label: getHeaderLabel(h, moduleName),
        type: getColumnType(h, moduleName),
        width: getColumnWidth(h, moduleName),
        align: getColumnAlign(h, moduleName),
        visible: !hiddenSet.has(h),
        lockedKey: h === "id",
        virtualOnly: false
    }));
    if (moduleName === "DON_HANG") {
        rows.push({
            key: "tong_tien",
            origKey: "tong_tien",
            label: getHeaderLabel("tong_tien", "DON_HANG"),
            type: "number",
            width: getColumnWidth("tong_tien", "DON_HANG"),
            align: getColumnAlign("tong_tien", "DON_HANG"),
            visible: !hiddenSet.has("tong_tien"),
            lockedKey: true,
            virtualOnly: true
        });
    }
    const tbody = document.getElementById("columnConfigBody");
    if (!tbody) return;
    tbody.innerHTML = rows.map(renderColumnConfigRowHtml).join("");
    if (focusHeader) {
        requestAnimationFrame(() => {
            const targetRow = [...tbody.querySelectorAll("tr")].find(tr => tr.dataset.origKey === focusHeader);
            const labelInput = targetRow?.querySelector('[data-col-field="label"]');
            if (labelInput) {
                labelInput.focus();
                labelInput.select();
            }
        });
    }
}

function onColumnLabelInput(labelInput) {
    const tr = labelInput.closest("tr");
    if (!tr || tr.dataset.origKey) return;
    const keyInput = tr.querySelector('[data-col-field="key"]');
    if (keyInput && !keyInput.dataset.manualEdited) {
        keyInput.value = slugifyColumnKey(labelInput.value);
    }
}

function addColumnConfigRow() {
    const tbody = document.getElementById("columnConfigBody");
    if (!tbody) return;
    const html = renderColumnConfigRowHtml({
        key: "",
        origKey: "",
        label: "",
        type: "text",
        width: null,
        align: "left",
        visible: true,
        lockedKey: false,
        virtualOnly: false
    });
    tbody.insertAdjacentHTML("beforeend", html);
    const lastRow = tbody.lastElementChild;
    const keyInput = lastRow?.querySelector('[data-col-field="key"]');
    if (keyInput) {
        keyInput.addEventListener("input", () => {
            keyInput.dataset.manualEdited = "1";
        });
    }
    lastRow?.querySelector('[data-col-field="label"]')?.focus();
    safeCreateIcons();
}

function moveColumnConfigRow(button, delta) {
    const row = button.closest("tr");
    const tbody = row?.parentElement;
    if (!row || !tbody) return;
    if (delta < 0 && row.previousElementSibling) {
        tbody.insertBefore(row, row.previousElementSibling);
    } else if (delta > 0 && row.nextElementSibling) {
        tbody.insertBefore(row.nextElementSibling, row);
    }
}

function removeColumnConfigRow(button) {
    const row = button.closest("tr");
    if (!row) return;
    const key = row.querySelector('[data-col-field="key"]')?.value || "";
    if (key === "id" || row.dataset.virtual === "1") return;
    if (key && !confirm(`Bạn có chắc muốn xóa cột "${key}" khỏi module ${CONFIG.modules[columnConfigEditingModule]?.label}?`)) return;
    row.remove();
}

async function resetColumnConfigDefault() {
    const mod = columnConfigEditingModule;
    const label = CONFIG.modules[mod]?.label || mod;
    if (!confirm(`Khôi phục cấu hình các cột của module "${label}" về mặc định ban đầu?`)) return;
    delete customColumnConfigs[mod];
    saveStoredColumnConfigs();
    renderColumnConfigTable(mod);
    if (currentModule === mod) {
        renderHeaders();
        renderTable();
    }
    safeCreateIcons();
}

function closeColumnConfigModal() {
    document.getElementById("columnConfigModal")?.classList.remove("active");
}

async function saveColumnConfigForm(event) {
    event.preventDefault();
    const mod = columnConfigEditingModule;
    const tbody = document.getElementById("columnConfigBody");
    if (!tbody || !mod) return;

    const trs = [...tbody.querySelectorAll("tr")];
    const headers = [];
    const hiddenHeaders = [];
    const labels = {};
    const types = {};
    const widths = {};
    const aligns = {};
    const renameMap = new Map();
    const seenKeys = new Set();

    for (const tr of trs) {
        const isVirtual = tr.dataset.virtual === "1";
        const origKey = String(tr.dataset.origKey || "").trim();
        const rawKey = String(tr.querySelector('[data-col-field="key"]')?.value || "").trim();
        const key = isVirtual ? origKey : (slugifyColumnKey(rawKey) || rawKey);
        const label = String(tr.querySelector('[data-col-field="label"]')?.value || "").trim();
        const type = String(tr.querySelector('[data-col-field="type"]')?.value || "text").trim();
        const rawWidth = Number(tr.querySelector('[data-col-field="width"]')?.value || 0);
        const align = String(tr.querySelector('[data-col-field="align"]')?.dataset.alignValue || "left").trim();
        const visible = Boolean(tr.querySelector('[data-col-field="visible"]')?.checked);

        if (!key) {
            alert("Mã cột không được để trống.");
            return;
        }
        if (seenKeys.has(key)) {
            alert(`Mã cột "${key}" bị trùng lặp. Vui lòng đặt mã cột khác nhau.`);
            return;
        }
        seenKeys.add(key);

        if (!isVirtual) {
            headers.push(key);
            types[key] = type;
            if (origKey && origKey !== key) {
                renameMap.set(key, origKey);
            }
        }
        if (!visible) hiddenHeaders.push(key);
        if (label) {
            labels[key] = label;
        }
        if (Number.isFinite(rawWidth) && rawWidth >= 40) {
            widths[key] = Math.round(rawWidth);
        }
        if (["left", "center", "right"].includes(align)) {
            aligns[key] = align;
        }
    }

    if (!headers.includes("id")) {
        headers.unshift("id");
        if (!hiddenHeaders.includes("id")) hiddenHeaders.push("id");
    }

    const defHeaders = getDefaultModuleConfig(mod).headers || [];
    const removedDefaultHeaders = defHeaders.filter(h => !headers.includes(h));

    customColumnConfigs[mod] = {
        headers,
        hiddenHeaders,
        labels,
        types,
        widths,
        aligns,
        removedDefaultHeaders
    };
    saveStoredColumnConfigs();

    showLoading(`Đang lưu và đồng bộ cột cho ${CONFIG.modules[mod]?.label || mod}...`);
    try {
        await syncModuleHeadersToSheet(mod, headers, renameMap);
        if (mod === "DS_SP") await loadDsSpOptions();
        if (mod === "NPP") await loadNppOptions();
        closeColumnConfigModal();
        if (currentModule === mod) {
            await renderFilterPanel();
            await fetchData();
        } else {
            renderHeaders();
            renderTable();
        }
    } catch (err) {
        console.error(err);
        alert("Không đồng bộ được cấu hình cột lên Google Sheets: " + err.message);
    } finally {
        hideLoading();
    }
}

function initModalDismiss() {
    const modalMask = document.getElementById("productModal");
    modalMask?.addEventListener("mousedown", event => {
        if (event.target === modalMask) closeProductForm();
    });
    const colModalMask = document.getElementById("columnConfigModal");
    colModalMask?.addEventListener("mousedown", event => {
        if (event.target === colModalMask) closeColumnConfigModal();
    });
    document.addEventListener("mousedown", event => {
        if (modalMask?.classList?.contains("active") && !event.target.closest(".modal")) {
            closeProductForm();
        }
        if (colModalMask?.classList?.contains("active") && !event.target.closest(".modal")) {
            closeColumnConfigModal();
        }
    });
}

function getStoredUser() {
    try {
        const raw = localStorage.getItem(AUTH_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (_) {
        return null;
    }
}

function saveStoredUser(user) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

function clearStoredUser() {
    localStorage.removeItem(AUTH_STORAGE_KEY);
}

function showLogin() {
    const authScreen = document.getElementById("authScreen");
    if (authScreen) authScreen.style.display = "grid";
    const appShell = document.querySelector(".app-shell");
    if (appShell) appShell.style.display = "none";
    hideLoading();
    document.getElementById("loginId")?.focus();
}

function showApp() {
    const authScreen = document.getElementById("authScreen");
    if (authScreen) authScreen.style.display = "none";
    const appShell = document.querySelector(".app-shell");
    if (appShell) appShell.style.display = "grid";
    renderCurrentUser();
}

function renderCurrentUser() {
    const panel = document.getElementById("userPanel");
    if (!panel || !currentUser) return;
    const avatar = currentUser.hinh_anh
        ? `<img src="${escapeHtml(currentUser.hinh_anh)}" alt="">`
        : `<div class="user-avatar-fallback">${escapeHtml(String(currentUser.ho_ten || currentUser.id || "?").slice(0, 1).toUpperCase())}</div>`;
    panel.innerHTML = `
        ${avatar}
        <div class="user-info">
            <strong>${escapeHtml(currentUser.ho_ten || currentUser.id)}</strong>
            <span>${escapeHtml(currentUser.quyen || "")}</span>
        </div>
        <button type="button" class="icon-btn" onclick="logout()" title="Đăng xuất">
            <i data-lucide="log-out" style="width:16px;"></i>
        </button>
    `;
    safeCreateIcons();
}

async function loadNhanVienRows() {
    const rows = await loadModuleRows("DSNV");
    const headers = getHeaders("DSNV");
    return rows.map(row => Object.fromEntries(headers.map((header, index) => [header, String(row[index] || "").trim()])));
}

async function handleLogin(event) {
    event.preventDefault();
    const id = String(document.getElementById("loginId").value || "").trim();
    const mk = String(document.getElementById("loginPassword").value || "").trim();
    const remember = document.getElementById("rememberLogin")?.checked ?? true;
    const errorEl = document.getElementById("loginError");
    if (errorEl) errorEl.innerText = "";
    if (!id || !mk) {
        if (errorEl) errorEl.innerText = "Vui lòng nhập tên đăng nhập và mật khẩu.";
        return;
    }

    showLoading("Đang đăng nhập...");
    try {
        const users = await loadNhanVienRows();
        const user = users.find(item => item.id === id && item.mk === mk);
        if (!user) {
            if (errorEl) errorEl.innerText = "Sai tên đăng nhập hoặc mật khẩu.";
            return;
        }
        currentUser = {
            id: user.id,
            ho_ten: user.ho_ten,
            hinh_anh: user.hinh_anh,
            gioi_tinh: user.gioi_tinh,
            ngay_sinh: user.ngay_sinh,
            quyen: user.quyen
        };
        if (remember) saveStoredUser(currentUser);
        showApp();
        await startApp();
    } catch (err) {
        console.error(err);
        if (errorEl) errorEl.innerText = "Không đăng nhập được: " + err.message;
    } finally {
        hideLoading();
    }
}

function logout() {
    currentUser = null;
    clearStoredUser();
    showLogin();
}

async function startApp() {
    document.title = CONFIG.appName;
    document.getElementById("pageTitle").innerText = CONFIG.appName;
    document.getElementById("brandText").innerHTML = "KIỀU<br>ĐỨC";
    try {
        const saved = sessionStorage.getItem(MODULE_STORAGE_KEY);
        if (CONFIG.modules[saved] && !CONFIG.modules[saved].hidden) currentModule = saved;
        const savedCongViecView = sessionStorage.getItem("kieuDucCongViecView");
        if (["table", "kanban"].includes(savedCongViecView)) congViecView = savedCongViecView;
    } catch (_) { }
    updateModuleTitle();
    renderTabs();
    updateModuleActions();
    safeCreateIcons();
    await renderFilterPanel();
    await fetchData();
}

async function init() {
    try {
        initModalDismiss();
        currentUser = getStoredUser();
        if (currentUser?.id) {
            showApp();
            await startApp();
            return;
        }
        showLogin();
    } catch (err) {
        console.error("Lỗi khởi tạo:", err);
        showApp();
    }
}

init();
