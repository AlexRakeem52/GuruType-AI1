import { supabase } from '../supabase';

export async function submitQuizResult(email, topType, scores) {
  const { error } = await supabase.from('quiz_results').insert([
    {
      email,
      top_type: topType,
      scores,
    },
  ]);

  if (error) {
    console.error('Supabase error saving quiz result:', error);
    return false;
  }

  return true;
}
