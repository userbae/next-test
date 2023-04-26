export default function NowDate(요청, 응답) {
  const today = new Date();
  return 응답.status(200).json(today);
}
