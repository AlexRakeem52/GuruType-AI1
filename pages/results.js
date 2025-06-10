// pages/results.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function ResultsPage() {
  const router = useRouter();
  const { type, scores } = router.query;
  const [insight, setInsight] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleGetCoach = () => {
    setShowForm(true);
  };

  const getTopTypeInsight = (type) => {
    switch (type) {
      case 'D':
        return 'You are a Driver – ambitious, assertive, and driven by results. You excel in leadership roles and thrive in fast-paced environments. Your confidence helps you push through challenges. You value control and enjoy setting and achieving bold goals. However, you may overlook input from others if you move too fast. Building patience can amplify your impact. Others admire your strength and tenacity. You bring clarity during chaos. Balancing empathy with execution will elevate your leadership. You are made to lead, build, and conquer.';
      case 'I':
        return 'You are an Influencer – charismatic, energetic, and highly social. You bring enthusiasm to every room and are a natural motivator. Your optimism is contagious and inspires others. You value relationships and thrive in group settings. Sometimes, your focus on people over tasks may cause missed details. Harnessing discipline can amplify your potential. You’re a visionary who connects the dots between people and purpose. Teams look to you for encouragement. Keep your creativity alive. You are built to inspire and energize.';
      case 'S':
        return 'You are a Supporter – steady, compassionate, and reliable. You value harmony and deeply care about people’s well-being. Your calm nature stabilizes group dynamics. Consistency is your superpower. You avoid conflict but must remember that your voice matters. Embrace change with confidence—it brings new opportunities. People trust and confide in you. You are loyal, patient, and resilient under pressure. You don’t need to be loud to be powerful. You are built to nurture and sustain growth.';
      case 'C':
        return 'You are a Challenger – logical, methodical, and precise. You thrive on facts, accuracy, and systems. Your work is thorough, and your standards are high. You analyze before acting, ensuring smart decisions. While your standards push for excellence, perfectionism can hold you back. Let progress be the priority sometimes. You offer incredible value in strategy and structure. Others respect your clarity and professionalism. Don’t forget to trust your gut occasionally. You are built to solve, optimize, and lead with intellect.';
      default:
        return 'You have a balanced DISC profile – flexible, adaptable, and highly self-aware. You possess strengths from each quadrant, making you a versatile leader and team player. You adjust your approach based on context, which is rare and valuable. While this gives you an edge, staying consistent with your values is key. Balance doesn’t mean indecision—it’s wisdom. You likely connect easily across personality types. You see the full picture when others can’t. Lean into your unique perspective. You are built to adapt and empower.';
    }
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your DISC Results</h1>
      <p style={{ marginBottom: '1rem' }}><strong>Type:</strong> {type}</p>
      <p style={{ marginBottom: '2rem' }}>{getTopTypeInsight(type)}</p>

      {!showForm && (
        <button onClick={handleGetCoach} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#6C5CE7', color: '#fff', border: 'none', borderRadius: '8px' }}>
          Get AI Coach
        </button>
      )}

      {showForm && (
        <form
          action="https://formspree.io/f/xqabpnnn"
          method="POST"
          onSubmit={() => setLoading(true)}
          style={{ marginTop: '2rem' }}
        >
          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Name:
            <input type="text" name="name" required style={{ marginLeft: '1rem', padding: '0.5rem' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Email:
            <input type="email" name="email" required style={{ marginLeft: '1rem', padding: '0.5rem' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Role:
            <select name="role" required style={{ marginLeft: '1rem', padding: '0.5rem' }}>
              <option value="individual">Individual</option>
              <option value="coach">Coach</option>
              <option value="organization">Organization</option>
            </select>
          </label>
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#00b894',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
            }}
          >
            Submit
          </button>
        </form>
      )}

      {loading && (
        <p style={{ marginTop: '1rem' }}>Generating your coaching insight...</p>
      )}

      {insight && (
        <p
          style={{
            marginTop: '2rem',
            backgroundColor: '#222',
            padding: '1rem',
            borderRadius: '8
