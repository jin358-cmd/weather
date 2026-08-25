import { StatusBadge, escapeHtml, formatDateTime, suspensionMeta, EmptyState } from "./StatusBadge.js";

export function SuspensionTable({ rows }) {
  if (!rows?.length) {
    return EmptyState({ title: "尚無停班停課公告", description: "目前沒有可顯示的公告資料。" });
  }

  return `
    <section class="suspension-table-wrap" aria-label="停班停課公告表格">
      <h2 class="section-title">停班停課公告</h2>
      <div class="table-scroll" tabindex="0" aria-label="停班停課公告表，可左右滑動">
        <table class="suspension-table">
          <thead>
            <tr>
              <th scope="col">縣市</th>
              <th scope="col">上班狀態</th>
              <th scope="col">上課狀態</th>
              <th scope="col">公告時間</th>
              <th scope="col">資料來源</th>
            </tr>
          </thead>
          <tbody>
            ${rows
              .map((row) => {
                const work = suspensionMeta(row.workStatus);
                const school = suspensionMeta(row.schoolStatus);
                return `
                <tr>
                  <th scope="row">${escapeHtml(row.cityName)}</th>
                  <td>${StatusBadge(work)}</td>
                  <td>${StatusBadge(school)}</td>
                  <td>${escapeHtml(formatDateTime(row.announcedAt))}</td>
                  <td>${escapeHtml(row.source)}</td>
                </tr>`;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}
