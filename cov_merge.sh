rm -rf .nyc_output coverage

yarn nyc merge .report_unit .nyc_output/coverage_unit.json
yarn nyc merge .report_e2e .nyc_output/coverage_e2e.json

# Windows path fix (Vitest bug?)
node clean_cov > .nyc_output/coverage_unit_fixed.json
rm .nyc_output/coverage_unit.json

yarn nyc report --report-dir .report_full --reporter json
yarn nyc report --report-dir .report_full --reporter html
