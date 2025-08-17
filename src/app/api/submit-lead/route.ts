import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Validate environment variables
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error('Missing Supabase environment variables');
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'name', 'organization_name', 'role_position', 'industry_sector',
      'email', 'whatsapp_number', 'country', 'organization_type',
      'services_interested', 'preferred_contact_method', 'how_heard', 'consent_given'
    ];
    
    for (const field of requiredFields) {
      if (!body[field] && field !== 'services_interested') {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Ensure services_interested is an array
    if (!Array.isArray(body.services_interested) || body.services_interested.length === 0) {
      return NextResponse.json(
        { error: 'At least one service must be selected' },
        { status: 400 }
      );
    }
    
    // Insert the lead into Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert({
        name: body.name,
        organization_name: body.organization_name,
        role_position: body.role_position,
        industry_sector: body.industry_sector,
        number_of_employees: body.number_of_employees || null,
        email: body.email,
        whatsapp_number: body.whatsapp_number,
        country: body.country,
        organization_type: body.organization_type,
        services_interested: body.services_interested,
        preferred_contact_method: body.preferred_contact_method,
        project_timeline: body.project_timeline || null,
        budget_range: body.budget_range || null,
        how_heard: body.how_heard,
        how_heard_other: body.how_heard_other || null,
        additional_comments: body.additional_comments || null,
        consent_given: body.consent_given,
        status: 'new'
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit lead information' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Lead submitted successfully',
        lead_id: data.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
