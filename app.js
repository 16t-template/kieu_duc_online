const CONFIG = {
    appName: "kiều đức",
    spreadsheetId: "1_ts4WHe5OdZzsLwenoNCwFhQ9bOG6bI3dsxQLSidAFU",
    serviceAccountEmail: "test-gia-ason@api-test-sheet-161.iam.gserviceaccount.com",
    privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3NN84hLTkQPZd
Lj7niXZTICq7nHsuTn3J6r2Paq12m70/lYSmrwh1i0EStr9bO19QM8cevGlslwGr
WSVOLJlc6+w1HGPKvRXtA41kYV9MYIvpzIPQtkFE7Hxq71QyBARcv39Lfzze6Ioj
3G8VBvAKFLAnCUr97GHRv+KbCTFxPZupd3PEB+xS5ZUlzdBCEZvDid3iXaaEJJ+l
Td1apAGQHjtnDTLOkiTa8zf7X5ebALwnI9MziOdN8VyprHXGhkachPbKyrG0QwEs
2jtiI6Y5ULsBPjNefoavH8MKU5DEAT9h0fZ7KfsKYVMDuXqmEKBs0D3B4Z6aDZQW
wT2dDRZDAgMBAAECggEAEIuVoSzZVuFhaz1GI9ji0IacjvO50cIq7M8Zrj4/F756
Ew6PIhKENafAb7U4INm2AnzUMO8CqL9Jpxs85qUM3W4JysSByqLUiRW2184amIyb
j7jCXfLBTQn8AbHgrUepl5d/vBmFYMgon/mqjbNiGDb4FZgEQSkie5o6fi/dWp5d
NahbZl+WTOB/znhAfKh/zferHNxldR/ERmwOubZUerkqysWiBigc3ovpLSUof9ur
z3hNPPp0CKQjF40xuQc6FYTHUHMLuMvp78PXuc/mYqQmZ8VOGhU+faGtZ4m+QJly
dF5dS8U5cwKEF+ptuAUiWSahn6INb9yKn3+FcsW0UQKBgQDb8N4eWFvbgpRo/vxo
wBN2u2TWubj6clcrq/1a+VR0njC28Can0ogJHhrFhPxVs5D/rugs3HlbyAXJFptY
V0DZPCwBxGU5P5RbGjXWWEUXjp4ISKQD8WKfVlXNr79TqLdOg2NZBYQAi06Cpo/T
PV9l7LSG2Tj/9WdvD7W2wvrpaQKBgQDVPjpJN6xh7+sHtSU0mjKvrqigpHbuSQ/o
XpUaWSIpJffm5QpFPAOcTT5mHZCyllicJQIrfPSY+sH8n+sF03CUqVkV4Q2UqfOf
pFaLDB4P6SQ8iesZyF4VKFrj/cAvRJmp0e5W/DRnFkoEp+8c+nrru2+Dzm9kb7Uq
0CiltqYAywKBgBtcfrV1to+7Ue0x84KwintV2rifyDRX7yI+tjkQFYKgf1zyyUxN
c6D2vsvdvGqI+TvlrXqPPwW8/4NBrbeyux2LT8o0fYc+sp0WyKXOu2Gv21caelUH
PYam/eultn6Y2Z0J2V0kw4Qx0GWOhQv5cZnDdb3k3iNxixmU8b03ynEpAoGBAKEA
7O0fNe50QRZ+tOq0ihSPYQ55XrqnO3WNBDLynZJH8pbI1CpWF7vJrpVXOUs9rQWo
A61mGR/wJMtiywaJEHWOL48PbzuR3jno0NcHfSMyOoPi9jlvSWncIFQH4TVPLF5F
/Rh8L+ytrZE6YpWUoX6e9KGmGgDRPw5mQGpuL4RlAoGADe9n080SXlsUk4nHVjUz
Efv7EBoBkgOpqb9T1foRfJl46NxmmTOYV3iGIhjwcDskEg284k4iq/gH6EEFyEBc
Vz13jzB1nBgjfezFesVQz7bA/+Wik6HZtxAxVg38BKMt+Q1tYw9wOjbGPqOn++VC
sR2Sh8e3h3Knd6j1tceRIFU=
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
            headers: ["id", "ten_sp", "gia_ban", "gia_km"],
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
const MODULE_ORDER = ["BAO_CAO", "DON_HANG", "CONG_NO", "CONG_VIEC", "NPP", "DS_SP", "BAO_HANH"];

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

function getModuleConfig(moduleName = currentModule) {
    return CONFIG.modules[moduleName] || CONFIG.modules.NPP;
}

function getHeaders(moduleName = currentModule) {
    return getModuleConfig(moduleName).headers;
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

function isNumericHeader(header) {
    return (getModuleConfig().numericHeaders || []).includes(header);
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
    const expectedHeaders = getHeaders(moduleName);
    const range = `${quoteSheetName(moduleName)}!A1:${colName(expectedHeaders.length - 1)}1`;
    const data = await sheetsFetch(`/values/${encodeURIComponent(range)}`);
    const currentHeaders = data.values?.[0] || [];
    const needsHeader = expectedHeaders.some((header, index) => String(currentHeaders[index] || "").trim() !== header);
    if (!needsHeader) return;
    if (currentHeaders.some(header => String(header || "").trim())) {
        const currentEndCol = colName(Math.max(currentHeaders.length, expectedHeaders.length) - 1);
        const oldDataRange = `${quoteSheetName(moduleName)}!A2:${currentEndCol}`;
        const oldData = await sheetsFetch(`/values/${encodeURIComponent(oldDataRange)}`);
        const oldHeaders = currentHeaders.map(header => String(header || "").trim());
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
    await sheetsFetch(`/values/${encodeURIComponent(range)}?valueInputOption=RAW`, {
        method: "PUT",
        body: JSON.stringify({ values: [expectedHeaders] })
    });
}

async function loadDsSpOptions() {
    await ensureModuleSheet("DS_SP");
    const headers = getHeaders("DS_SP");
    const idIndex = headers.indexOf("id");
    const tenIndex = headers.indexOf("ten_sp");
    const giaIndex = headers.indexOf("gia_ban");
    const range = `${quoteSheetName("DS_SP")}!A2:${colName(headers.length - 1)}`;
    const data = await sheetsFetch(`/values/${encodeURIComponent(range)}`);
    dsSpOptions = (data.values || [])
        .map(row => ({
            id: String(row[idIndex] || "").trim(),
            ten: String(row[tenIndex] || "").trim(),
            gia: String(row[giaIndex] || "").trim()
        }))
        .filter(item => item.id);
    return dsSpOptions;
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

async function buildBaoCaoData() {
    const [donHangRows, nppRows] = await Promise.all([
        loadModuleRows("DON_HANG"),
        loadModuleRows("NPP")
    ]);
    const donHangHeaders = getHeaders("DON_HANG");
    const nppHeaders = getHeaders("NPP");
    const nppNameById = new Map(nppRows.map(row => [
        String(row[nppHeaders.indexOf("id")] || "").trim(),
        String(row[nppHeaders.indexOf("ten")] || "").trim()
    ]));
    const nppCommissionById = new Map(nppRows.map(row => [
        String(row[nppHeaders.indexOf("id")] || "").trim(),
        String(row[nppHeaders.indexOf("hoa_hong")] || "").trim()
    ]));
    const nppIndex = donHangHeaders.indexOf("npp");
    const ngayIndex = donHangHeaders.indexOf("ngay");
    const mdhIndex = donHangHeaders.indexOf("mdh");
    const idSpIndex = donHangHeaders.indexOf("id_sp");
    const tenIndex = donHangHeaders.indexOf("ten");
    const slgIndex = donHangHeaders.indexOf("slg");
    const filterDateFrom = document.getElementById("reportDateFrom")?.value || "";
    const filterDateTo = document.getElementById("reportDateTo")?.value || "";
    const filterNpp = String(document.getElementById("reportNpp")?.value || "").trim().toLowerCase();
    const filterIdSp = String(document.getElementById("reportIdSp")?.value || "").trim().toLowerCase();
    const fromTime = filterDateFrom ? new Date(`${filterDateFrom}T00:00:00`).getTime() : 0;
    const toTime = filterDateTo ? new Date(`${filterDateTo}T23:59:59`).getTime() : 0;
    const skuSet = new Set();
    const nppSales = new Map();
    const skuSales = new Map();
    const dateSales = new Map();
    let totalSales = 0;
    let totalQuantity = 0;
    let totalCommission = 0;

    donHangRows.forEach(row => {
        const npp = String(row[nppIndex] || "").trim() || "Không có NPP";
        const ngay = String(row[ngayIndex] || "").trim();
        const mdh = String(row[mdhIndex] || "").trim();
        const idSp = String(row[idSpIndex] || "").trim();
        const productName = String(row[tenIndex] || "").trim();
        const rowTime = getDateTime(ngay);
        if (fromTime && rowTime < fromTime) return;
        if (toTime && rowTime > toTime) return;
        if (filterNpp && npp.toLowerCase() !== filterNpp) return;
        if (filterIdSp && idSp.toLowerCase() !== filterIdSp) return;
        const quantity = parseMoney(row[slgIndex]);
        const sales = getDonHangItemSales(row, donHangHeaders);
        totalSales += sales;
        totalQuantity += quantity;
        if (idSp) skuSet.add(idSp);
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

    const nppRowsReport = [...nppSales.values()]
        .map(entry => ({
            ...entry,
            orderCount: entry.orders.size,
            bestSku: [...entry.sku.values()].sort((a, b) => b.quantity - a.quantity || b.sales - a.sales)[0] || null
        }))
        .sort((a, b) => b.sales - a.sales);

    return {
        totalSales,
        totalQuantity,
        totalCommission,
        totalSku: skuSet.size,
        bestNpp: nppRowsReport[0] || null,
        nppRows: nppRowsReport,
        skuRows: [...skuSales.values()].sort((a, b) => b.sales - a.sales),
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
    lucide.createIcons();
}

function updateModuleTitle() {
    const sheetName = document.getElementById("sheetName");
    if (sheetName) sheetName.innerText = getModuleConfig().label.toUpperCase();
}

function updateModuleActions() {
    const uploadBtn = document.getElementById("uploadBtn");
    const addBtn = document.getElementById("addBtn");
    const searchContainer = document.querySelector(".search-container");
    const isReport = getModuleConfig().reportOnly;
    if (uploadBtn) uploadBtn.style.display = currentModule === "CONG_VIEC" || isReport ? "none" : "flex";
    if (addBtn) addBtn.style.display = isReport ? "none" : "flex";
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
        lucide.createIcons();
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

    const headers = getHeaders();
    showLoading(`Đang tải dữ liệu ${currentModule}...`);
    try {
        if (currentModule === "DON_HANG" || currentModule === "CONG_NO") await loadNppOptions();
        if (seq !== moduleLoadSeq) return;
        await ensureModuleSheet(currentModule);
        if (seq !== moduleLoadSeq) return;
        const range = `${quoteSheetName(currentModule)}!A2:${colName(headers.length - 1)}`;
        const data = await sheetsFetch(`/values/${encodeURIComponent(range)}`);
        if (seq !== moduleLoadSeq) return;
        const rows = data.values || [];
        allData = rows.map((row, index) => {
            const normalized = headers.map((_, cellIndex) => String(row[cellIndex] ?? ""));
            normalized._sheetRow = index + 2;
            return normalized;
        });
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
        panel.innerHTML = `
            <label><span>Từ ngày</span><input id="reportDateFrom" type="date" value="${getQuickDateRange('month').from}" onchange="fetchData()"></label>
            <label><span>Tới ngày</span><input id="reportDateTo" type="date" value="${getQuickDateRange('month').to}" onchange="fetchData()"></label>
            ${renderQuickDateButtons("report")}
            <label><span>NPP</span><select id="reportNpp" onchange="fetchData()">
                <option value="">Tất cả NPP</option>
                ${nppOptions.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.id)}${item.ten ? ` - ${escapeHtml(item.ten)}` : ""}</option>`).join("")}
            </select></label>
            <label><span>ID_SP</span><input id="reportIdSp" type="text" placeholder="Lọc ID_SP..." oninput="fetchData()"></label>
        `;
        if (!nppOptions.length) {
            loadNppOptions().then(() => {
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
        lucide.createIcons();
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

function sortFilteredDataByNgayDesc() {
    if (!["DON_HANG", "CONG_NO", "CONG_VIEC"].includes(currentModule)) return;
    const ngayIndex = getHeaderIndex("ngay", currentModule);
    if (ngayIndex < 0) return;
    filteredData.sort((a, b) => getDateTime(b[ngayIndex]) - getDateTime(a[ngayIndex]) || Number(b._sheetRow || 0) - Number(a._sheetRow || 0));
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
                sheetRows: []
            });
        }
        const entry = groups.get(key);
        entry.tong_tien += getDonHangItemSales(row, headers);
        entry.sheetRows.push(Number(row._sheetRow));
        if (getDateTime(row[ngayIndex]) > getDateTime(entry.ngay)) entry.ngay = String(row[ngayIndex] || "").trim();
        if (!entry.npp && row[nppIndex]) entry.npp = String(row[nppIndex] || "").trim();
    });
    return [...groups.values()].sort((a, b) => getDateTime(b.ngay) - getDateTime(a.ngay));
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

        return true;
    });
    sortFilteredDataByNgayDesc();
}

function renderHeaders() {
    const head = document.getElementById("tableHead");
    if (getModuleConfig().reportOnly || !canBulkSelectRows()) {
        head.innerHTML = "";
        return;
    }
    const headers = currentModule === "DON_HANG" ? ["ngay", "mdh", "npp", "tong_tien"] : getHeaders().filter(header => header !== "id");
    head.innerHTML = `<tr>
        <th class="select-col">
            <input id="selectAllRows" type="checkbox" onchange="toggleSelectAllRows(this)" onclick="event.stopPropagation()" title="Chọn tất cả dòng đang lọc">
        </th>
        ${headers.map(header => `<th>${escapeHtml(header.toUpperCase())}</th>`).join("")}
    </tr>`;
    syncSelectAllCheckbox();
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
        const headers = ["ngay", "mdh", "npp", "tong_tien"];
        const start = (currentPage - 1) * rowsPerPage;
        const pageData = getDonHangSummaryRows().slice(start, start + rowsPerPage);
        tbody.innerHTML = pageData.map(row => {
            const sheetRows = row.sheetRows.join(",");
            const allChecked = row.sheetRows.length > 0 && row.sheetRows.every(sheetRow => selectedSheetRows.has(sheetRow));
            const cells = [
                row.ngay,
                row.mdh,
                getNppDisplayName(row.npp),
                formatDisplayNumber(row.tong_tien)
            ].map(value => `<td>${escapeHtml(value)}</td>`).join("");
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
    const headers = currentModule === "DON_HANG" ? [...storageHeaders, "tien_hoa_hong"] : storageHeaders.filter(header => header !== "id");
    const mdhIndex = storageHeaders.indexOf("mdh");
    const nppIndex = storageHeaders.indexOf("npp");
    const start = (currentPage - 1) * rowsPerPage;
    const pageData = filteredData.slice(start, start + rowsPerPage);
    const congNoBalanceMap = currentModule === "CONG_NO" ? getCongNoBalanceMap() : null;
    tbody.innerHTML = pageData.map((row, rowIndex) => {
        const cells = headers.map((header, index) => {
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
                return `<td><a href="${escapeHtml(text)}" target="_blank">Link</a></td>`;
            }
            const displayValue = isNumericHeader(header) || header === "tien_hoa_hong" ? formatDisplayNumber(value) : value;
            return `<td>${escapeHtml(displayValue)}</td>`;
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
    let t_under468 = 0, t_468_780 = 0, t_base780 = 0;
    let t_over_1 = 0, t_over_15 = 0, t_over_175 = 0, t_over_185 = 0, t_over_2 = 0;

    if (sales < 468000000) {
        // Tỷ lệ 0%
    } else if (sales < 780000000) {
        t_468_780 = sales * 0.005;
    } else {
        t_base780 = 780000000 * 0.01;
        const excess = sales - 780000000;
        if (sales < 1100000000) {
            t_over_1 = excess * 0.01;
        } else if (sales < 1300000000) {
            t_over_15 = excess * 0.015;
        } else if (sales < 1700000000) {
            t_over_175 = excess * 0.0175;
        } else if (sales < 2000000000) {
            t_over_185 = excess * 0.0185;
        } else {
            t_over_2 = excess * 0.02;
        }
    }
    
    const total = t_under468 + t_468_780 + t_base780 + t_over_1 + t_over_15 + t_over_175 + t_over_185 + t_over_2;
    return {
        t_under468, t_468_780, t_base780,
        t_over_1, t_over_15, t_over_175, t_over_185, t_over_2,
        total
    };
}

function renderBaoCao() {
    document.getElementById("reportView")?.remove();
    const data = reportData || { totalSales: 0, totalQuantity: 0, totalCommission: 0, totalSku: 0, bestNpp: null, nppRows: [], skuRows: [], dateRows: [] };
    const reportNppName = row => row?.nppName || row?.npp || "";
    const skuPageSize = 10;
    const skuTotalPages = Math.max(Math.ceil(data.skuRows.length / skuPageSize), 1);
    reportSkuPage = Math.min(Math.max(reportSkuPage, 1), skuTotalPages);
    const skuPageRows = data.skuRows.slice((reportSkuPage - 1) * skuPageSize, reportSkuPage * skuPageSize);
    
    let totalMonthlyCommission = 0;
    let sum_under468 = 0, sum_468_780 = 0, sum_base780 = 0;
    let sum_over_1 = 0, sum_over_15 = 0, sum_over_175 = 0, sum_over_185 = 0, sum_over_2 = 0;
    const monthlyCommissionRows = [];
    const monthlySales = new Map();
    data.dateRows.forEach(row => {
        const d = new Date(getDateTime(row.ngay));
        if (d.getTime() > 0) {
            const monthStr = (d.getMonth() + 1).toString().padStart(2, '0') + '/' + d.getFullYear();
            monthlySales.set(monthStr, (monthlySales.get(monthStr) || 0) + row.sales);
        }
    });
    for (const [month, sales] of monthlySales.entries()) {
        const bd = getSalesCommissionBreakdown(sales);
        const commission = bd.total;
        monthlyCommissionRows.push({ 
            month, 
            sales, 
            t_under468: bd.t_under468,
            t_468_780: bd.t_468_780,
            t_base780: bd.t_base780,
            t_over_1: bd.t_over_1,
            t_over_15: bd.t_over_15,
            t_over_175: bd.t_over_175,
            t_over_185: bd.t_over_185,
            t_over_2: bd.t_over_2,
            commission 
        });
        sum_under468 += bd.t_under468;
        sum_468_780 += bd.t_468_780;
        sum_base780 += bd.t_base780;
        sum_over_1 += bd.t_over_1;
        sum_over_15 += bd.t_over_15;
        sum_over_175 += bd.t_over_175;
        sum_over_185 += bd.t_over_185;
        sum_over_2 += bd.t_over_2;
        totalMonthlyCommission += commission;
    }
    monthlyCommissionRows.sort((a, b) => {
        const [am, ay] = a.month.split('/');
        const [bm, by] = b.month.split('/');
        return (by - ay) || (bm - am);
    });

    const chartColors = ["#4285f4", "#12b886", "#f6a21a", "#ef5350", "#7e57c2", "#26a69a", "#ffca28", "#5c6bc0"];
    const chartTotal = data.nppRows.reduce((sum, row) => sum + row.sales, 0);
    let chartCursor = 0;
    const chartSegments = data.nppRows.map((row, index) => {
        const start = chartCursor;
        const percent = chartTotal ? (row.sales / chartTotal) * 100 : 0;
        chartCursor += percent;
        return {
            ...row,
            color: chartColors[index % chartColors.length],
            percent,
            segment: `${chartColors[index % chartColors.length]} ${start}% ${chartCursor}%`
        };
    });
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
                <span>Tổng hoa hồng</span>
                <strong>${escapeHtml(formatDisplayNumber(totalMonthlyCommission))}</strong>
            </article>
        </div>
        <div class="report-grid dashboard-report-group">
            <section class="report-panel npp-chart-panel">
                <h2>Biểu đồ doanh số NPP</h2>
                <div class="sales-chart">
                    ${chartSegments.length ? `
                        <div class="sales-pie-layout">
                            <div class="sales-pie" style="background: conic-gradient(${chartSegments.map(item => item.segment).join(", ")});">
                                <div class="sales-pie-center">
                                    <span>Tổng</span>
                                    <strong>${escapeHtml(formatDisplayNumber(chartTotal))}</strong>
                                </div>
                            </div>
                            <div class="sales-pie-legend">
                                ${chartSegments.map(item => `
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
                    ` : `<div class="report-empty">Chưa có dữ liệu doanh số.</div>`}
                </div>
            </section>
        </div>
        <div class="report-chart-pair">
            <section class="report-panel commission-chart-panel">
                <h2>Tổng tiền theo ngày</h2>
                ${data.dateRows.length
            ? `<div class="commission-line-chart"><canvas id="commissionLineChart"></canvas></div>`
            : `<div class="report-empty">Chưa có dữ liệu hoa hồng.</div>`}
            </section>
        </div>
        <div class="report-grid dashboard-report-group">
            <section class="report-panel sales-commission-panel">
                <h2>Hoa hồng theo doanh số</h2>
                <div class="report-table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Tháng</th>
                                <th>Doanh số</th>
                                <th>Dưới 468tr (0%)</th>
                                <th>468tr-780tr (0.5%)</th>
                                <th>Cố định 780tr (1%)</th>
                                <th>780tr - dưới 1.1 tỷ (1%)</th>
                                <th>1.1 tỷ - dưới 1.3 tỷ (1.5%)</th>
                                <th>1.3 tỷ - dưới 1.7 tỷ (1.75%)</th>
                                <th>1.7 tỷ - dưới 2 tỷ (1.85%)</th>
                                <th>Từ 2 tỷ trở lên (2%)</th>
                                <th>Hoa hồng</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${monthlyCommissionRows.map(row => `
                                <tr>
                                    <td>${escapeHtml(row.month)}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.sales))}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.t_under468))}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.t_468_780))}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.t_base780))}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.t_over_1))}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.t_over_15))}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.t_over_175))}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.t_over_185))}</td>
                                    <td>${escapeHtml(formatDisplayNumber(row.t_over_2))}</td>
                                    <td><strong>${escapeHtml(formatDisplayNumber(row.commission))}</strong></td>
                                </tr>
                            `).join("")}
                            <tr class="report-total-row">
                                <td colspan="2">Tổng cộng</td>
                                <td>${escapeHtml(formatDisplayNumber(sum_under468))}</td>
                                <td>${escapeHtml(formatDisplayNumber(sum_468_780))}</td>
                                <td>${escapeHtml(formatDisplayNumber(sum_base780))}</td>
                                <td>${escapeHtml(formatDisplayNumber(sum_over_1))}</td>
                                <td>${escapeHtml(formatDisplayNumber(sum_over_15))}</td>
                                <td>${escapeHtml(formatDisplayNumber(sum_over_175))}</td>
                                <td>${escapeHtml(formatDisplayNumber(sum_over_185))}</td>
                                <td>${escapeHtml(formatDisplayNumber(sum_over_2))}</td>
                                <td><strong>${escapeHtml(formatDisplayNumber(totalMonthlyCommission))}</strong></td>
                            </tr>
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
                ${data.skuRows.length > skuPageSize ? `
                    <div class="report-table-pagination">
                        <button type="button" class="pagination-btn" onclick="changeReportSkuPage(-1)" ${reportSkuPage === 1 ? "disabled" : ""}>
                            <i data-lucide="chevron-left" style="width:16px;"></i> Trước
                        </button>
                        <div class="page-info">Trang ${reportSkuPage} / ${skuTotalPages} (${data.skuRows.length} dòng)</div>
                        <button type="button" class="pagination-btn" onclick="changeReportSkuPage(1)" ${reportSkuPage === skuTotalPages ? "disabled" : ""}>
                            Tiếp <i data-lucide="chevron-right" style="width:16px;"></i>
                        </button>
                    </div>
                ` : ""}
            </section>
        </div>
    `;
    document.querySelector(".main-content").insertBefore(report, document.getElementById("pagination"));
    if (data.dateRows.length) {
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
    const containerWidth = canvas.parentElement?.clientWidth || 640;
    const cssWidth = Math.max(containerWidth, 420);
    const cssHeight = 300;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(cssWidth * dpr);
    canvas.height = Math.round(cssHeight * dpr);
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    const padding = { top: 46, right: 70, bottom: 52, left: 70 };
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
        const maxLabelWidth = Math.max(categoryWidth - 12, 44);
        let compactLabel = label;
        while (compactLabel.length > 3 && ctx.measureText(`${compactLabel}...`).width > maxLabelWidth) {
            compactLabel = compactLabel.slice(0, -1);
        }
        if (compactLabel !== label) compactLabel += "...";
        ctx.fillStyle = "#64748b";
        ctx.fillText(compactLabel, x, padding.top + plotHeight + 12);
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
    lucide.createIcons();
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

function renderDonHangForm(rows = []) {
    const headers = getHeaders("DON_HANG");
    const ngayIndex = headers.indexOf("ngay");
    const mdhIndex = headers.indexOf("mdh");
    const nppIndex = headers.indexOf("npp");
    const today = new Date().toISOString().slice(0, 10);
    const ngay = rows[0]?.[ngayIndex] || today;
    const mdh = rows[0]?.[mdhIndex] || randomCode(10);
    const npp = rows[0]?.[nppIndex] || "";
    currentDonHangMdh = rows.length ? mdh : "";
    const itemRows = rows.length ? rows : [[generateNextId(), ngay, mdh, npp, "", "", "", "", ""]];
    const productOptions = dsSpOptions
        .map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.ten)}</option>`)
        .join("");
    const nppSelectOptions = nppOptions
        .map(item => `<option value="${escapeHtml(item.id)}" ${item.id === npp ? "selected" : ""}>${escapeHtml(item.id)}${item.ten ? ` - ${escapeHtml(item.ten)}` : ""}</option>`)
        .join("");

    document.getElementById("formFields").innerHTML = `
        <section class="order-common-fields">
            <label>
                <span>NGÀY</span>
                <input id="donHangNgay" type="date" value="${escapeHtml(ngay)}">
            </label>
            <label>
                <span>MDH</span>
                <div class="inline-field">
                    <input id="donHangMdh" type="text" value="${escapeHtml(mdh)}">
                    <button type="button" class="secondary-btn compact-btn" onclick="generateQuickMdh()">Tạo MDH</button>
                </div>
            </label>
            <label>
                <span>NPP</span>
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
                            <th>ID_SP</th>
                            <th>TÊN</th>
                            <th>ĐƠN GIÁ</th>
                            <th>SLG</th>
                            <th>THÀNH TIỀN</th>
                            <th>CHIẾT KHẤU (%)</th>
                            <th>TIỀN CK</th>
                            <th>TIỀN HÀNG</th>
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
    lucide.createIcons();
}

function generateQuickMdh() {
    const input = document.getElementById("donHangMdh");
    if (input) input.value = randomCode(10);
}

function addDonHangItem() {
    const body = document.getElementById("donHangItemsBody");
    const index = body.querySelectorAll("tr").length;
    body.insertAdjacentHTML("beforeend", renderDonHangItemRow([], index));
    lucide.createIcons();
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
    const textareaHeaders = getModuleConfig().textareaHeaders || [];
    const statusOptions = getModuleConfig().statusOptions || [];
    container.innerHTML = getHeaders().map((header, index) => {
        const rawValue = row?.[index] ?? (header === "id" ? generateNextId() : (header === "ngay" ? new Date().toISOString().slice(0, 10) : ""));
        const value = escapeHtml(rawValue);
        if (header === "id") {
            const readonly = row && currentModule !== "DS_SP" ? "readonly" : "";
            return `<label><span>${escapeHtml(header.toUpperCase())}</span><input id="formField_${index}" type="text" value="${value}" ${readonly}></label>`;
        }
        if ((currentModule === "CONG_VIEC" && header === "tinh_trang") || (currentModule === "CONG_NO" && header === "truong")) {
            const optionValue = currentModule === "CONG_NO" && !rawValue ? "THU" : rawValue;
            return `<label class="wide-field"><span>${escapeHtml(header.toUpperCase())}</span>${renderOptionButtons(`formField_${index}`, optionValue, statusOptions)}</label>`;
        }
        if (currentModule === "CONG_NO" && header === "npp") {
            return `<label><span>NPP</span><select id="formField_${index}">
                <option value=""></option>
                ${nppOptions.map(item => `<option value="${escapeHtml(item.id)}" ${String(rawValue) === item.id ? "selected" : ""}>${escapeHtml(item.id)}${item.ten ? ` - ${escapeHtml(item.ten)}` : ""}</option>`).join("")}
            </select></label>`;
        }
        if (textareaHeaders.includes(header)) {
            return `<label class="wide-field"><span>${escapeHtml(header.toUpperCase())}</span><textarea id="formField_${index}" rows="4">${value}</textarea></label>`;
        }
        if (currentModule === "NPP" && header === "hoa_hong") {
            return `<label><span>HOA_HONG (%)</span><input id="formField_${index}" type="number" min="0.001" max="100" step="0.001" value="${value}"></label>`;
        }
        if (currentModule === "CONG_NO" && header === "so_tien") {
            return `<label><span>SO_TIEN</span><input id="formField_${index}" type="number" min="0" step="1" value="${value}"></label>`;
        }
        const type = header.includes("ngay") ? "date" : "text";
        const readonly = (currentModule === "DON_HANG" && header === "thanh_tien") || (currentModule === "CONG_NO" && header === "cong_no_con_lai") ? "readonly" : "";
        return `<label><span>${escapeHtml(header.toUpperCase())}</span><input id="formField_${index}" type="${type}" value="${value}" ${readonly}></label>`;
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

    const rows = [...document.querySelectorAll("#donHangItemsBody tr")].map(item => {
        const id = String(item.querySelector('[data-order-field="id"]')?.value || "").trim() || generateNextId();
        const idSp = String(item.querySelector('[data-order-field="id_sp"]')?.value || "").trim();
        const ten = String(item.querySelector('[data-order-field="ten"]')?.value || "").trim();
        const donGia = String(item.querySelector('[data-order-field="don_gia"]')?.value || "").trim();
        const slg = String(item.querySelector('[data-order-field="slg"]')?.value || "").trim();
        const thanhTien = String(item.querySelector('[data-order-field="thanh_tien"]')?.value || "").trim();
        const chietKhau = String(item.querySelector('[data-order-field="chiet_khau"]')?.value || "").trim();
        const tienChietKhau = String(item.querySelector('[data-order-field="tien_chiet_khau"]')?.value || "").trim();
        const tienHang = String(item.querySelector('[data-order-field="tien_hang"]')?.value || "").trim();
        return [id, ngay, mdh, npp, idSp, ten, donGia, slg, thanhTien, chietKhau, tienChietKhau, tienHang];
    }).filter(row => row[4] && parseMoney(row[7]) > 0);

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

function initModalDismiss() {
    const modalMask = document.getElementById("productModal");
    modalMask.addEventListener("mousedown", event => {
        if (event.target === modalMask) closeProductForm();
    });
    document.addEventListener("mousedown", event => {
        if (!modalMask.classList.contains("active")) return;
        if (event.target.closest(".modal")) return;
        closeProductForm();
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
    document.getElementById("authScreen").style.display = "grid";
    document.querySelector(".app-shell").style.display = "none";
    hideLoading();
    document.getElementById("loginId")?.focus();
}

function showApp() {
    document.getElementById("authScreen").style.display = "none";
    document.querySelector(".app-shell").style.display = "";
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
    lucide.createIcons();
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
    lucide.createIcons();
    await renderFilterPanel();
    await fetchData();
}

async function init() {
    initModalDismiss();
    currentUser = getStoredUser();
    if (currentUser?.id) {
        showApp();
        await startApp();
        return;
    }
    showLogin();
}

init();
